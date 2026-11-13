import { expect, test } from "@playwright/test";

test.describe("Quote Request Form", () => {
  test("submits a complete quote request successfully with server confirmation", async ({
    page,
  }) => {
    // Intercept quote API endpoint to simulate successful dispatch
    let requestPayload: Record<string, unknown> | null = null;
    await page.route("**/api/send-quote", async (route) => {
      requestPayload = JSON.parse(route.request().postData() || "{}");
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ success: true }),
      });
    });

    // Intercept native browser alert
    let dialogMessage = "";
    page.on("dialog", async (dialog) => {
      dialogMessage = dialog.message();
      await dialog.accept();
    });

    await page.goto("/contact-page");
    await page.waitForLoadState("networkidle");
    await expect(page.getByRole("heading", { level: 2 })).toContainText("Demande de devis");

    // Fill contact details
    await page.getByPlaceholder("Votre nom").fill("Amélie Poulain");
    await page.getByPlaceholder("Votre email").fill("amelie@example.com");
    await page.getByPlaceholder(/06 12 34/i).fill("06 98 76 54 32");

    // Select event type
    await page.locator("select").first().selectOption("Mariage");

    // Select status radio
    await page.getByRole("radio", { name: "Particulier" }).check();

    // Fill guest count
    await page.getByPlaceholder(/ex : 50/i).fill("75");

    // Select theme
    await page.locator("select").nth(1).selectOption("Méditerranéen");

    // Check callback
    await page.getByLabel("Je souhaite être recontacté").check();

    // Fill notes
    await page
      .getByPlaceholder("Vos attentes ou précisions...")
      .fill("Cocktail dînatoire extérieur avec options végétariennes.");

    // Submit form
    await page.getByRole("button", { name: "Envoyer" }).click();

    // Verify dialog message confirmation
    await expect.poll(() => dialogMessage).toBe("Message envoyé avec succès");

    // Verify payload sent to backend
    expect(requestPayload).toMatchObject({
      name: "Amélie Poulain",
      email: "amelie@example.com",
      phone: "06 98 76 54 32",
      eventType: "Mariage",
      status: "Particulier",
      guests: 75,
      theme: "Méditerranéen",
      callback: true,
    });

    // Verify form reset after successful submission
    await expect(page.getByPlaceholder("Votre nom")).toHaveValue("");
    await expect(page.getByPlaceholder("Votre email")).toHaveValue("");
    await expect(page.getByPlaceholder(/06 12 34/i)).toHaveValue("");
  });

  test("handles server failure gracefully when sending quote request", async ({ page }) => {
    // Intercept quote API to return a 502 Bad Gateway
    await page.route("**/api/send-quote", async (route) => {
      await route.fulfill({
        status: 502,
        contentType: "application/json",
        body: JSON.stringify({ statusCode: 502, statusMessage: "Erreur lors de l’envoi Telegram" }),
      });
    });

    // Intercept native browser alert
    let dialogMessage = "";
    page.on("dialog", async (dialog) => {
      dialogMessage = dialog.message();
      await dialog.accept();
    });

    await page.goto("/contact-page");
    await page.waitForLoadState("networkidle");
    await page.getByPlaceholder("Votre nom").fill("Client Test");
    await page.getByPlaceholder("Votre email").fill("test@example.com");
    await page.getByRole("button", { name: "Envoyer" }).click();

    // Verify error dialog message
    await expect.poll(() => dialogMessage).toBe("Erreur lors de l’envoi");
  });
});
