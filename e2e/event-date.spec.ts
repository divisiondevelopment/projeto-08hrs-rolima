import { test, expect } from "@playwright/test";

test.describe("HRR-15 — data do evento e 2ª edição", () => {
  test("home exibe nova data e copy de 2ª edição", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByText("2ª edição")).toBeVisible();
    await expect(page.getByText("5 de dezembro de 2026")).toBeVisible();
    await expect(page.getByText("05/12/2026")).toBeVisible();
    await expect(page.getByText("segunda edição")).toBeVisible();

    await expect(page.getByText("18/10/2026")).toHaveCount(0);
    await expect(page.getByText("18 de outubro")).toHaveCount(0);
    await expect(page.getByText("primeira edição")).toHaveCount(0);
  });

  test("CTA de inscrição mantém Google Forms", async ({ page }) => {
    await page.goto("/");
    const link = page.getByRole("link", { name: /Fazer inscrição/i }).first();
    await expect(link).toHaveAttribute(
      "href",
      "https://forms.gle/NwULwZ7gixSqnfqeA"
    );
  });

  test("countdown exibe segmentos antes do evento", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Dias")).toBeVisible();
    await expect(page.getByText("Horas")).toBeVisible();
  });
});
