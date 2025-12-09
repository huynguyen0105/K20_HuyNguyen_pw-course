import { test, expect } from "@playwright/test";

test("Bai 1", async ({ page }) => {
  await test.step("Navigate to Playwright VN", async function () {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Validate title home page", async function () {
    await page.locator('//h1[contains(text(), "Tài liệu học automation test")]').isVisible();
  });

  await test.step("click vào Bài học 1: Register Page", async function () {
    await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();
  });

  await test.step("Validate title Bài học 1: Register Page (có đủ các element)", async function () {
    await page.locator('//h1[contains(text(), "User Registration")]').isVisible();
  });

  await test.step("Nhập đầy đủ các thông tin trong page bài học 1", async function () {
    //username
    await page.locator('//input[@id="username"]').fill("Huy");
    //email
    await page.locator('//input[@id="email"]').fill("Huy@email.com");
    //gender 
    await page.locator('//input[@id="male"]').check();
    //Interests
    await page.locator('//select[@id="interests"]').selectOption('sports');
    //Country
    await page.locator('//select[@id="country"]').selectOption('uk');
    //Dob
    await page.locator('//input[@id="dob"]').fill('1999-12-18');
   
  });

});
