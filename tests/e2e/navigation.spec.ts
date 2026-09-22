import { expect, test } from "@playwright/test";

test.describe("Navigation and Shell", () => {
  test("navigates through desktop navbar links smoothly", async ({ page }) => {
    await page.goto("/");

    // Brand logo navigates to home
    const brand = page.locator("nav").getByRole("link", { name: /L’escale Gourmande/i });
    await expect(brand).toBeVisible();

    // Desktop navbar navigation
    const nav = page.locator(".desktop-nav-menu");
    await expect(nav).toBeVisible();

    // Navigate to Notre histoire
    await nav.getByRole("link", { name: "Notre histoire" }).click();
    await expect(page).toHaveURL(/\/about-page/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Qui sommes-nous");

    // Navigate to Nos créations
    await nav.getByRole("link", { name: "Nos créations" }).click();
    await expect(page).toHaveURL(/\/creations/);
    await expect(page.locator("main").getByText("Nos créations").first()).toBeVisible();

    // Navigate to Contact
    await nav.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/\/contact-page/);
    await expect(page.getByRole("heading", { level: 2 })).toContainText("Demande de devis");

    // Return to Accueil
    await nav.getByRole("link", { name: "Accueil" }).click();
    await expect(page).toHaveURL(/\/$/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("L'escale gourmande");
  });

  test("toggles mobile navigation drawer and allows page navigation", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Mobile menu button is visible, desktop menu is hidden
    const menuBtn = page.getByRole("button", { name: "Menu" });
    await expect(menuBtn).toBeVisible();
    await expect(page.locator(".desktop-nav-menu")).toBeHidden();

    // Open mobile drawer
    await menuBtn.click();
    const mobileDrawer = page.locator("nav div.md\\:hidden");
    await expect(mobileDrawer).toBeVisible();

    // Click on Nos créations in mobile menu
    await mobileDrawer.getByRole("link", { name: "Nos créations" }).click();
    await expect(page).toHaveURL(/\/creations/);
    await expect(page.locator("main").getByText("Nos créations").first()).toBeVisible();

    // Verify mobile drawer closes after navigation
    await expect(page.locator("nav div.md\\:hidden")).toBeHidden();
  });

  test("contains functional footer links and legal page routes", async ({ page }) => {
    await page.goto("/");

    const footer = page.locator("footer");
    await expect(footer).toBeVisible();

    // Contact and email links in footer
    const mailLink = footer.locator('a[href^="mailto:"]');
    await expect(mailLink).toHaveAttribute("href", "mailto:contact@lescalegourmande.fr");

    const phoneLink = footer.locator('a[href^="tel:"]');
    await expect(phoneLink).toHaveAttribute("href", "tel:+33123456789");

    // Legal links in footer bottom
    await footer.getByRole("link", { name: "Mentions légales" }).click();
    await expect(page).toHaveURL(/\/legal-mentions/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Mentions légales");

    await page.goto("/");
    await footer.getByRole("link", { name: "CGV" }).click();
    await expect(page).toHaveURL(/\/cgv-page/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Conditions générales de vente",
    );

    await page.goto("/");
    await footer.getByRole("link", { name: "RGPD" }).click();
    await expect(page).toHaveURL(/\/rgpd-page/);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Politique de confidentialité",
    );
  });
});
