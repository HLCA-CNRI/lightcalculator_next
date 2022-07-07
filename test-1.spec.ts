import {test, expect} from "@playwright/test";

test("test", async ({page}) => {
  // Go to https://lc.cnrikorea.com/
  await page.goto("https://lc.cnrikorea.com/");

  // Click text=Baseline주 5일 출근012345 >> input[type="range"]
  await page.locator('text=Baseline주 5일 출근012345 >> input[type="range"]').click();

  // Click text=주 5일 출근012345 >> input[type="range"]
  await page.locator('text=주 5일 출근012345 >> input[type="range"]').click();
});
