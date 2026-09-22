import { expect, test } from "@playwright/test";

test.describe("Content Pages and Showcase", () => {
  test("renders home page sections with functional hero CTA", async ({ page }) => {
    await page.goto("/");

    // Hero section
    await expect(page.getByRole("heading", { level: 1 })).toContainText("L'escale gourmande");
    const ctaButton = page.getByRole("button", { name: "Demander un devis" });
    await expect(ctaButton).toBeVisible();

    // Click CTA button navigates to contact form
    await ctaButton.click();
    await expect(page).toHaveURL(/\/contact-page/);
    await expect(page.getByRole("heading", { level: 2 })).toContainText("Demande de devis");

    // Return to home page to check other sections
    await page.goto("/");
    const services = page
      .locator("section")
      .filter({ hasText: /prestations|services|événements/i });
    await expect(services.first()).toBeVisible();

    // Testimonials
    const testimonials = page
      .locator("section")
      .filter({ hasText: /ce que disent nos clients|avis|témoignages/i });
    await expect(testimonials.first()).toBeVisible();
  });

  test("displays creations showcase with categorized event tags", async ({ page }) => {
    await page.goto("/creations");

    await expect(page.locator("main").getByText("Nos créations").first()).toBeVisible();

    // Verify creation cards exist
    const cards = page.locator(".grid > div");
    await expect(cards.first()).toBeVisible();

    // Verify presence of tags
    await expect(page.getByText("Mariage", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Anniversaire", { exact: true }).first()).toBeVisible();
    await expect(page.getByText("Entreprise", { exact: true }).first()).toBeVisible();
  });

  test("verifies responsive layout without horizontal scrolling on mobile and tablet", async ({
    page,
  }) => {
    const viewports = [
      { name: "mobile", width: 390, height: 844 },
      { name: "tablet", width: 768, height: 1024 },
    ];

    for (const vp of viewports) {
      await page.setViewportSize({ width: vp.width, height: vp.height });
      await page.goto("/");
      await page.waitForLoadState("networkidle");

      // Verify no horizontal overflow
      const hasHorizontalScroll = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(hasHorizontalScroll).toBe(false);

      // Verify on creations page
      await page.goto("/creations");
      await page.waitForLoadState("networkidle");
      const creationsOverflow = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });
      expect(creationsOverflow).toBe(false);
    }
  });
});
