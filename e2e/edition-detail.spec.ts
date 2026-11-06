import { test, expect } from "@playwright/test";

test.describe("HRR-20 — detalhe da edição", () => {
  test("edicao-01 exibe galeria com créditos", async ({ page }) => {
    await page.goto("/edicoes/edicao-01");
    await expect(page.getByRole("heading", { name: /1ª edição/i })).toBeVisible();
    await expect(page.getByText("Fotógrafo A (placeholder)")).toBeVisible();
    await expect(page.getByText("Fotógrafo B (placeholder)")).toBeVisible();
  });

  test("slug inválido retorna 404", async ({ page }) => {
    const response = await page.goto("/edicoes/edicao-99");
    expect(response?.status()).toBe(404);
    await expect(page.getByText("Edição não encontrada")).toBeVisible();
  });
});
