import {test, expect} from "@playwright/test";

test("Forecast Checkbox Input Test", async ({page}) => {
  // Go to https://lc.cnrikorea.com/
  await page.goto("https://lc.cnrikorea.com/");
  // Forecast 신재생 에너지 check
  await page.locator('text=Forecast 신재생 에너지 사용 >> input[type="checkbox"]').check();
  expect(
    await page.isChecked('text=Forecast 신재생 에너지 사용 >> input[type="checkbox"]')
  ).toBeTruthy();
  // Forecast 신재생 에너지 uncheck
  await page.locator('text=Forecast 신재생 에너지 사용 >> input[type="checkbox"]').uncheck();
  expect(
    await page.isChecked('text=Forecast 신재생 에너지 사용 >> input[type="checkbox"]')
  ).toBeFalsy();
});
