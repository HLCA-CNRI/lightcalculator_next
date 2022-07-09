import {test, expect} from "@playwright/test";
// lc에서는 0~5까지 6개의 인풋이가능함. range는 1~6으로 지정되서 테스트에서 1은 lc에서는 0. 테스팅할때 1놓으면 1이나오는지 확인.
test("Forecast Range Input Test", async ({page}) => {
  // Go to https://lc.cnrikorea.com/
  await page.goto("https://lc.cnrikorea.com");
  const slider = page.locator('text=Forecast주 5일 출근012345 >> input[type="range"]');
  // slider range value 를 1 해놓고 1이 나오는지 확인
  await page.$eval(
    'text=Forecast주 5일 출근012345 >> input[type="range"]',
    (e: HTMLInputElement, value: number) => {
      e.value = value.toString();
      e.dispatchEvent(new Event("input", {bubbles: true}));
      e.dispatchEvent(new Event("change", {bubbles: true}));
    },
    1
  );
  await expect.soft(slider).toHaveValue(`1`);
  // slider range value 를 2 해놓고 2이 나오는지 확인
  await page.$eval(
    'text=Forecast주 5일 출근012345 >> input[type="range"]',
    (e: HTMLInputElement, value: number) => {
      e.value = value.toString();
      e.dispatchEvent(new Event("input", {bubbles: true}));
      e.dispatchEvent(new Event("change", {bubbles: true}));
    },
    2
  );
  await expect.soft(slider).toHaveValue(`2`);
  // slider range value 를 3 해놓고 3이 나오는지 확인
  await page.$eval(
    'text=Forecast주 5일 출근012345 >> input[type="range"]',
    (e: HTMLInputElement, value: number) => {
      e.value = value.toString();
      e.dispatchEvent(new Event("input", {bubbles: true}));
      e.dispatchEvent(new Event("change", {bubbles: true}));
    },
    3
  );
  await expect.soft(slider).toHaveValue(`3`);
  // slider range value 를 4 해놓고 4가 나오는지 확인
  await page.$eval(
    'text=Forecast주 5일 출근012345 >> input[type="range"]',
    (e: HTMLInputElement, value: number) => {
      e.value = value.toString();
      e.dispatchEvent(new Event("input", {bubbles: true}));
      e.dispatchEvent(new Event("change", {bubbles: true}));
    },
    4
  );
  await expect.soft(slider).toHaveValue(`4`);
  // slider range value 를 5 해놓고 5가 나오는지 확인
  await page.$eval(
    'text=Forecast주 5일 출근012345 >> input[type="range"]',
    (e: HTMLInputElement, value: number) => {
      e.value = value.toString();
      e.dispatchEvent(new Event("input", {bubbles: true}));
      e.dispatchEvent(new Event("change", {bubbles: true}));
    },
    5
  );
  await expect.soft(slider).toHaveValue(`5`);
  // slider range value 를 6 해놓고 6이 나오는지 확인
  await page.$eval(
    'text=Forecast주 5일 출근012345 >> input[type="range"]',
    (e: HTMLInputElement, value: number) => {
      e.value = value.toString();
      e.dispatchEvent(new Event("input", {bubbles: true}));
      e.dispatchEvent(new Event("change", {bubbles: true}));
    },
    6
  );
  await expect.soft(slider).toHaveValue(`6`);
});
