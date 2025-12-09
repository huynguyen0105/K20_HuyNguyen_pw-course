import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await test.step("Navigate to Playwright VN", async function () {
    await page.goto("https://material.playwrightvn.com/");
  });
  await test.step("Validate title", async function () {
    await expect(page).toHaveTitle("Tài liệu học automation test");
  });
});
