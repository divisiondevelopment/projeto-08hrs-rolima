import { test, expect } from "@playwright/test";

test.describe("HRR-25 — Open Graph", () => {
  test("/edicoes inclui og:title e og:description", async ({ page }) => {
    await page.goto("/edicoes");
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /Edições passadas/
    );
    await expect(
      page.locator('meta[property="og:description"]')
    ).toHaveAttribute("content", /edições anteriores/i);
  });

  test("/edicoes/edicao-01 inclui OG da edição", async ({ page }) => {
    await page.goto("/edicoes/edicao-01");
    await expect(page.locator('meta[property="og:title"]')).toHaveAttribute(
      "content",
      /1ª edição/
    );
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
      "content",
      /cover\.jpeg/
    );
  });
});
