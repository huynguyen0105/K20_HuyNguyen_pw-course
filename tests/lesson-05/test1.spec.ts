import { test, expect } from "@playwright/test";

test("Bai 1", async ({ page }) => {
  await test.step("Navigate to Playwright VN", async function () {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Validate title home page", async function () {
    await page
      .locator('//h1[contains(text(), "Tài liệu học automation test")]')
      .isVisible();
  });

  await test.step("click vào Bài học 1: Register Page", async function () {
    await page
      .getByRole("link", {
        name: "Bài học 1: Register Page (có đủ các element)",
      })
      .click();
  });

  await test.step("Validate title Bài học 1: Register Page (có đủ các element)", async function () {
    await page
      .locator('//h1[contains(text(), "User Registration")]')
      .isVisible();
  });

  await test.step("Nhập đầy đủ các thông tin trong page bài học 1", async function () {
    //username
    await page.locator('//input[@id="username"]').fill("Huy");
    //email
    await page.locator('//input[@id="email"]').fill("Huy@email.com");
    //gender
    await page.locator('//input[@id="male"]').check();
    //Interests
    await page.locator('//select[@id="interests"]').selectOption("sports");
    //Country
    await page.locator('//select[@id="country"]').selectOption("uk");
    //Dob
    await page.locator('//input[@id="dob"]').fill("1999-12-18");
    //Profile Picture
    await page
      .locator('//input[@id="profile"]')
      .setInputFiles("tests/lesson-05/Test.txt");

    //Biography
    await page.locator('//textarea[@id="bio"]').fill("ABCXYZ");

    //rate
    await page.locator('//input[@id="rating"]').fill("10");

    //favorite color
    await page.locator('//input[@id="favcolor"]').fill("#00ff00");

    //News letter
    await page.locator('//div[contains(text(), "Hover over me")]').hover();
    // await page.getByText("Hover over me").hover();
    await expect(
      page.locator(
        '//span[contains(text(), "Subscribe to our newsletter for updates")]'
      )
    ).toBeVisible();
    await page.locator('//input[@id="newsletter"]').check();

    //enable future
    const enableFutureXpath = page.locator(
      '//span[contains(@class, "slider") and contains(@class, "round")]'
    );
    await enableFutureXpath.check();
    await expect(enableFutureXpath).toBeChecked();

    //Star rating
    await page.locator("#starRating").click({
      position: { x: 60, y: 10 },
    });

    //Custom date

    // Click Register button
    // page.getByText("Register").hover();
    await page.locator('//button[contains(text(), "Register")]').click();
  });
});
