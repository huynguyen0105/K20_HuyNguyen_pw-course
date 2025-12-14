import { test, expect } from "@playwright/test";

test("Bai 4", async ({ page }) => {
  await test.step("Navigate to Playwright VN", async function () {
    await page.goto("https://material.playwrightvn.com/");
  });

  await test.step("Validate title home page", async function () {
    await page
      .locator('//h1[contains(text(), "Tài liệu học automation test")]')
      .isVisible();
  });

  await test.step("Click vào Bài học 4: Personal notes", async function () {
    await page
      .getByRole("link", {
        name: "Bài học 4: Personal notes",
      })
      .click();
  });

  await test.step("Validate title Bài học 4: Personal notes", async function () {
    await page.locator('//h1[contains(text(), "Personal Notes")]').isVisible();
  });

  /*
  Thêm mới 10 note với nội dung sau ở bảng dưới đây.
    i. Field “Title”: điền nội dung ở cột “Tên action”
    ii. Field “Content”: điền nội dung ở cột “Mô tả”
  */

  const notes = [
    { title: "Tên action 1", content: "Mô tả 1" },
    { title: "một hoặc nhiều cha", content: "Mô tả 2" },
    { title: "Tên action 3", content: "Mô tả 3" },
    { title: "Tên action 4", content: "Mô tả 4" },
    { title: "Tên action 5", content: "Mô tả 5" },
    { title: "một hoặc nhiều con", content: "Mô tả 6" },
    { title: "Tên action 7", content: "Mô tả 7" },
    { title: "Tên action 8", content: "Mô tả 8" },
    { title: "một hoặc nhiều", content: "Mô tả 9" },
    { title: "Tên action 10", content: "Mô tả 10" },
  ];
  async function addNote(title: string, content: string) {
    const titleEle = page.locator(`//input[@id="note-title"]`);
    const contentEle = page.locator(`//textarea[@id="note-content"]`);
    const addNotebuttonEle = page.locator(`//button[@id="add-note"]`);

    //iput title
    await titleEle.fill(title);
    //input content
    await contentEle.fill(content);
    //click Add Note button
    await addNotebuttonEle.click();
  }

  //add 10 notes
  await test.step("Add 10 notes", async function () {
    for (const node of notes) {
      await addNote(node.title, node.content);
    }
  });

  //Verify 10 nodes added. (ideea: Verify it has 10 rows)
  await test.step("Verify 10 nodes added", async function () {
    const rowInNodeListEle = page.locator(`//ul[@id="notes-list"]/li`);
    await expect(rowInNodeListEle).toHaveCount(10);
  });

  //Thực hiện search với keyword “một hoặc nhiều”
  await test.step("Search keyword 'một hoặc nhiều'", async function () {
    await page.locator(`//input[@id="search"]`).fill("một hoặc nhiều");
  });

  // Verify results (placeholder)
  await test.step("Verify keyword 'một hoặc nhiều' is displayed on search bar", async function () {
    // Verify value on search input is "một hoặc nhiều"
    await expect(page.locator(`//input[@id="search"]`)).toHaveValue(
      "một hoặc nhiều"
    );
  });

  await test.step("Verify notes searched contains 'một hoặc nhiều'", async function () {
    // get all results of (title and content of note)
    const textOfResults = await page
      .locator('//ul[@id="notes-list"]/li/div[1]')
      .allInnerTexts();

    // console.log("textOfResults", textOfResults);

    //verify all results contains "một hoặc nhiều"
    for (const text of textOfResults) {
      expect(text).toContain(`một hoặc nhiều`);
    }
  });
});
