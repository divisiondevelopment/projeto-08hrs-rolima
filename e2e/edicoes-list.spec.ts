import { test, expect } from "@playwright/test";

test("HRR-19 — listagem de edições", async ({ page }) => {
  await page.goto("/edicoes");
  await expect(page.getByRole("heading", { name: "Edições passadas" })).toBeVisible();
  const link = page.getByRole("link", { name: /1ª edição/i });
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute("href", "/edicoes/edicao-01");
});
