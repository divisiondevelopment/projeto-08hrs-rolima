import { test, expect } from "@playwright/test";

test.describe("HRR-22 — link Edições no navbar", () => {
  test("desktop exibe link para /edicoes", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await page.getByRole("navigation").getByRole("link", { name: "Edições" }).click();
    await expect(page).toHaveURL(/\/edicoes$/);
  });

  test("mobile menu exibe link para /edicoes", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/edicoes/edicao-01");
    await page.getByRole("button", { name: /Abrir menu/i }).click();
    await page.getByRole("link", { name: "Edições" }).click();
    await expect(page).toHaveURL(/\/edicoes$/);
  });
});
