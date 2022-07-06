import {test, expect} from "@playwright/test";

test("Baseline Range Input Test", async ({page}) => {
  // Go to https://lc.cnrikorea.com/
  await page.goto("https://lc.cnrikorea.com");
  await page.locator('text=Baseline주 5일 출근012345 >> input[type="range"]').fill("2");
  //   await expect
  //     .soft(page.locator('text=Baseline주 5일 출근012345 >> input[type="range"]'))
  //     .toHaveValue(`2`);
});
