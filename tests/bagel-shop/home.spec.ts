import { test, expect } from "@playwright/test";

test("validate promo code popup", async ({ page }) => {
  await page.goto("http://localhost:5174/");

  const popupPromise = page.waitForEvent("popup");
  await page.getByRole("button", { name: "Get Promo Code"}).click();
  const popup = await popupPromise;
  await expect(popup.getByText("The promo code is:")).toBeVisible();
});