import {test, expect} from "@playwright/test";

test("test", async ({page}) => {
  // Go to https://lc.cnrikorea.com/
  await page.goto("https://lc.cnrikorea.com/");

  // Click nav button >> nth=0
  const [page1] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("nav button").first().click(),
  ]);

  // Click button:has-text("데모 신청하기")
  const [page2] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator('button:has-text("데모 신청하기")').click(),
  ]);
});
