import { test, expect } from "@playwright/test";

test("Bai 3", async ({ page }) => {
  await test.step("Navigate to Playwright VN", async function () {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Validate title home page", async function () {
    await page
      .locator('//h1[contains(text(), "Tài liệu học automation test")]')
      .isVisible();
  });

  await test.step("click vào Bài học 3: Todo Page", async function () {
    await page
      .getByRole("link", {
        name: "Bài học 3: Todo page",
      })
      .click();
  });

  await test.step("Validate title Bài học 3: Todo Page", async function () {
    await page.locator('//h1[contains(text(), "To-Do List")]').isVisible();
  });

  //Thêm mới 100 todo item có nội dung “Todo <i>”
  await test.step("Add 100 to do items", async function () {
    const inputTodoEle = page.locator(`//input[@id="new-task"]`);
    const addTaskButtonEle = page.locator(`//button[@id="add-task"]`);
    for (let i = 0; i < 100; i++) {
      await inputTodoEle.fill(`Todo ${i}`);
      await addTaskButtonEle.click();
    }
  });

  //Verify 100 todo items added. (ideea: Verify it has 100 rows)
  await test.step("Verify 100 todo items added", async function () {
    const rowInTodoListEle = page.locator(`//ul[@id="task-list"]/li`);
    await expect(rowInTodoListEle).toHaveCount(100);
  });

  //Xoá các todo có số lẻ
  await test.step("Delete todo items with odd number", async function () {
    for (let i = 1; i < 100; i += 2) {
      page.once("dialog", async (dialog) => {
        await dialog.accept();
      });
      const deleteButtonOfAddRowInTodoListEle = page.locator(
        `//ul[@id="task-list"]/li[.//text()[normalize-space()="Todo ${i}"]]//button[text()="Delete"]`
      );
      //ul[@id="task-list"]/li/span[contains(text(),"Todo 1")]/following-sibling::div//button[contains(text(), "Delete")]
      await deleteButtonOfAddRowInTodoListEle.click();
    }
  });

  //Verify that the remaining rows are all even
  await test.step("Verify that the remaining rows are all even", async function () {
    // get all row remain
    const textOfRemainTodo = await page
      .locator('//ul[@id="task-list"]/li/span')
      .allInnerTexts();

    //get number from text of remain todo
    const numbers = textOfRemainTodo.map((text) =>
      parseInt(text.replace("Todo ", ""), 10)
    );

    //verify all number in numbers is even
    for (const num of numbers) {
      expect(num % 2).toBe(0);
    }
  });
});
