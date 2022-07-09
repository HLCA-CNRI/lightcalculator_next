import {test, expect} from "@playwright/test";

test("test", async ({page}) => {
  // Go to https://lc.cnrikorea.com/
  await page.goto("https://lc.cnrikorea.com/");

  // Click nav button >> nth=0
  const [page1] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("nav button").first().click(),
  ]);
  await expect(page1).toHaveURL("https://www.cnrikorea.com/");

  // Click button:has-text("데모 신청하기")
  const [page2] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator('button:has-text("데모 신청하기")').click(),
  ]);
  await expect(page2).toHaveURL("https://cis.cnrikorea.com/register");
});
