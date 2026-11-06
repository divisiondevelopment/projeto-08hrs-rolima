import { test, expect } from "@playwright/test";

test("HRR-18 — ImageWithCredit exibe crédito", async ({ page }) => {
  await page.goto("/edicoes/edicao-01");
  await expect(page.getByText("Fotógrafo A (placeholder)")).toBeVisible();
});
