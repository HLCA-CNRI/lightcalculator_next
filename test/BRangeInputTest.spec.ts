import {test, expect} from "@playwright/test";

test("Baseline Range Input Test", async ({page}) => {
  // Go to https://lc.cnrikorea.com/
  await page.goto("https://lc.cnrikorea.com");
  const slider = page.locator('text=Baseline주 5일 출근012345 >> input[type="range"]');
  const srcBox = await slider.boundingBox();
});
