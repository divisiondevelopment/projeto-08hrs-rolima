import { test, expect } from "@playwright/test";

test("HRR-23 — galeria define sizes nas imagens", async ({ page }) => {
  await page.goto("/edicoes/edicao-01");
  const gridImages = page.locator("figure img");
  await expect(gridImages).toHaveCount(2);
  for (let i = 0; i < 2; i++) {
    await expect(gridImages.nth(i)).toHaveAttribute("sizes", /33vw|50vw/);
  }

  await gridImages.first().click();
  const lightboxImage = page.getByRole("dialog").locator("img");
  await expect(lightboxImage).toHaveAttribute("sizes", "90vw");
});
