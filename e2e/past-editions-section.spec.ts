import { test, expect } from "@playwright/test";

test("HRR-21 — seção Edições passadas na landing", async ({ page }) => {
  await page.goto("/#edicoes-passadas");
  await expect(page.getByRole("heading", { name: "Edições passadas" })).toBeVisible();
  await page.getByRole("link", { name: "Ver edições" }).click();
  await expect(page).toHaveURL(/\/edicoes$/);
});
