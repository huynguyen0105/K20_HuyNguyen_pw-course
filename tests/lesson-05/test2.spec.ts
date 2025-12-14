import { test, expect } from "@playwright/test";

test("Bai 2", async ({ page }) => {
  await test.step("Navigate to Playwright VN", async function () {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("click vào Bài học 2: Product Page", async function () {
    await page
      .getByRole("link", {
        name: "Bài học 2: Product Page",
      })
      .click();
  });

  await test.step("Validate title Bài học 2: Product Page", async function () {
    await page
      .locator('//h1[contains(text(), "Simple E-commerce")]')
      .isVisible();
  });

  //Add to cart
  const cartPlan = [
    { id: 1, quantity: 2 },
    { id: 2, quantity: 3 },
    { id: 3, quantity: 1 },
  ];
  for (const item of cartPlan) {
    await test.step(`Add Product ${item.id} - ${item.quantity} time(s)`, async () => {
      const addToCartButtonEle = page.locator(
        `//button[contains(@class, "add-to-cart") and @data-product-id="${item.id}"]`
      );
      for (let i = 0; i < item.quantity; i++) {
        await addToCartButtonEle.click();
      }
    });
  }

  //Verify quantity in Shopping cart
  const expectQuantity = [
    { name: "Product 1", quantity: 2 },
    { name: "Product 2", quantity: 3 },
    { name: "Product 3", quantity: 1 },
  ];

  for (const item of expectQuantity) {
    await test.step(`Verify ${item.name} has quantity ${item.quantity}`, async () => {
      const quantityOfProductEle = page.locator(
        `//tr[td[1][normalize-space()="${item.name}"]]/td[3]`
      );
      await expect(quantityOfProductEle).toHaveText(`${item.quantity}`);
    });
  }
});
