import { test, expect } from "@playwright/test";

test("HRR-18 — ImageWithCredit exibe crédito", async ({ page }) => {
  await page.goto("/playwright-fixtures/image-with-credit");
  await expect(page.getByText("Crédito de teste Playwright")).toBeVisible();
});
