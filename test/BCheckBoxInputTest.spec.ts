import {test, expect} from "@playwright/test";

test("Baseline Checkbox Input Test", async ({page}) => {
  // Go to https://lc.cnrikorea.com/
  await page.goto("https://lc.cnrikorea.com/");
  // Baseline 신재생 에너지 check
  await page.locator('text=Baseline 신재생 에너지 사용 >> input[type="checkbox"]').check();
  expect(
    await page.isChecked('text=Baseline 신재생 에너지 사용 >> input[type="checkbox"]')
  ).toBeTruthy();
  await page.locator('text=Baseline 신재생 에너지 사용 >> input[type="checkbox"]').uncheck();
  // Baseline 신재생 에너지 uncheck
  expect(
    await page.isChecked('text=Baseline 신재생 에너지 사용 >> input[type="checkbox"]')
  ).toBeFalsy();
});
