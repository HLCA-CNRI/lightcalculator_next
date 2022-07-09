import {test, expect} from "@playwright/test";
import {bSetUseRenewableEnergy} from "../../store/slices/baselineSlice";

test("Reset Button", async ({page}) => {
  // Go to https://lc.cnrikorea.com/
  await page.goto("https://lc.cnrikorea.com/");
  const bCompanyEmployeeSize = page.locator('text=Baseline명 >> input[type="number"]');
  const bGasoline = page.locator('text=Baseline휘발유 >> input[type="number"]').first();
  const bDiesel = page.locator('text=Baseline휘발유 >> input[type="number"]').nth(1);
  const bLPG = page.locator('text=Baseline휘발유 >> input[type="number"]').nth(2);
  const bHydrogen = page.locator('text=Baseline휘발유 >> input[type="number"]').nth(3);
  const bElectric = page.locator('text=Baseline휘발유 >> input[type="number"]').nth(4);
  const bCompanyGasPrice = page.locator('text=Baseline만원 >> input[type="number"]');
  const bSlider = page.locator('text=Baseline주 5일 출근012345 >> input[type="range"]');
  const bDistance = page.locator('text=Baseline평균 출퇴근 거리km >> input[type="number"]').first();
  const bCar = page.locator('text=Baseline평균 출퇴근 거리km >> input[type="number"]').nth(1);
  const bPublicTransit = page
    .locator('text=Baseline평균 출퇴근 거리km >> input[type="number"]')
    .nth(2);
  const bWalkOrBike = page
    .locator('text=Baseline평균 출퇴근 거리km >> input[type="number"]')
    .nth(3);
  const bUseRenewableEnergy = page.locator(
    'text=Baseline 신재생 에너지 사용 >> input[type="checkbox"]'
  );
  const bCompanySize = page.locator('text=Baseline m2 >> input[type="number"]');
  const bAsia = page.locator(".w-full > div > .flex > .w-12").first();
  const bOceana = page.locator(".w-full > div > .flex > .w-12").nth(4);

  const fCompanyEmployeeSize = page.locator('text=Forecast명 >> input[type="number"]');
  const fGasoline = page.locator('text=Forecast휘발유 >> input[type="number"]').first();
  const fDiesel = page.locator('text=Forecast휘발유 >> input[type="number"]').nth(1);
  const fLPG = page.locator('text=Forecast휘발유 >> input[type="number"]').nth(2);
  const fHydrogen = page.locator('text=Forecast휘발유 >> input[type="number"]').nth(3);
  const fCompanyGasPrice = page.locator('text=Forecast만원 >> input[type="number"]');
  const fSlider = page.locator('text=Forecast주 5일 출근012345 >> input[type="range"]');
  const fElectric = page.locator('text=Forecast휘발유 >> input[type="number"]').nth(4);
  const fDistance = page.locator('text=Forecast평균 출퇴근 거리km >> input[type="number"]').first();
  const fCar = page.locator('text=Forecast평균 출퇴근 거리km >> input[type="number"]').nth(1);
  const fPublicTransit = page
    .locator('text=Forecast평균 출퇴근 거리km >> input[type="number"]')
    .nth(2);
  const fWalkOrBike = page
    .locator('text=Forecast평균 출퇴근 거리km >> input[type="number"]')
    .nth(3);
  const fUseRenewableEnergy = page.locator(
    'text=Forecast 신재생 에너지 사용 >> input[type="checkbox"]'
  );
  const fCompanySize = page.locator('text=Forecastm2 >> input[type="number"]');
  const fAsia = page.locator(".w-full > div > .flex > .w-12").first();
  const fOceana = page.locator(".w-full > div > .flex > .w-12").nth(4);
  // Baseline 값 바꾸기
  await bCompanyEmployeeSize.fill("20");
  await bGasoline.fill("20");
  await bDiesel.fill("20");
  await bLPG.fill("20");
  await bHydrogen.fill("20");
  await bElectric.fill("20");

  await bCompanyGasPrice.fill("10000");

  await page.$eval(
    'text=Forecast주 5일 출근012345 >> input[type="range"]',
    (e: HTMLInputElement, value: number) => {
      e.value = value.toString();
      e.dispatchEvent(new Event("input", {bubbles: true}));
      e.dispatchEvent(new Event("change", {bubbles: true}));
    },
    1
  );

  await bDistance.fill("20");
  await bCar.fill("20");
  await bPublicTransit.fill("40");
  await bWalkOrBike.fill("20");

  await bUseRenewableEnergy.check();
  await bCompanySize.fill("2000");
  await bAsia.fill("10");
  await bOceana.fill("100");
  // Baseline 바뀐값 확인
  await expect.soft(bCompanyEmployeeSize).toHaveValue("20");
  await expect.soft(bGasoline).toHaveValue("20");
  await expect.soft(bDiesel).toHaveValue("20");
  await expect.soft(bLPG).toHaveValue("20");
  await expect.soft(bHydrogen).toHaveValue("20");
  await expect.soft(bElectric).toHaveValue("20");
  await expect.soft(bCompanyGasPrice).toHaveValue("10000");
  await expect.soft(bSlider).toHaveValue(`6`);
  await expect.soft(bDistance).toHaveValue("20");
  await expect.soft(bCar).toHaveValue("20");
  await expect.soft(bPublicTransit).toHaveValue("40");
  await expect.soft(bWalkOrBike).toHaveValue("20");
  expect(
    await page.isChecked('text=Baseline 신재생 에너지 사용 >> input[type="checkbox"]')
  ).toBeTruthy();
  await expect.soft(bCompanySize).toHaveValue("2000");
  await expect.soft(bAsia).toHaveValue("10");
  await expect.soft(bOceana).toHaveValue("100");
  // Forecast 값 바꾸기
  await fCompanyEmployeeSize.fill("20");
  await fGasoline.fill("20");
  await fDiesel.fill("20");
  await fLPG.fill("20");
  await fHydrogen.fill("20");
  await fElectric.fill("20");

  await fCompanyGasPrice.fill("10000");
  await page.$eval(
    'text=Forecast주 5일 출근012345 >> input[type="range"]',
    (e: HTMLInputElement, value: number) => {
      e.value = value.toString();
      e.dispatchEvent(new Event("input", {bubbles: true}));
      e.dispatchEvent(new Event("change", {bubbles: true}));
    },
    1
  );

  await fDistance.fill("20");
  await fCar.fill("20");
  await fPublicTransit.fill("40");
  await fWalkOrBike.fill("20");

  await fUseRenewableEnergy.check();
  await fCompanySize.fill("2000");
  await fAsia.fill("10");
  await fOceana.fill("100");
  // Forecast 바뀐값 확인
  await expect.soft(fCompanyEmployeeSize).toHaveValue("20");
  await expect.soft(fGasoline).toHaveValue("20");
  await expect.soft(fDiesel).toHaveValue("20");
  await expect.soft(fLPG).toHaveValue("20");
  await expect.soft(fHydrogen).toHaveValue("20");
  await expect.soft(fElectric).toHaveValue("20");
  await expect.soft(fCompanyGasPrice).toHaveValue("10000");
  await expect.soft(fSlider).toHaveValue(`6`);
  await expect.soft(fDistance).toHaveValue("20");
  await expect.soft(fCar).toHaveValue("20");
  await expect.soft(fPublicTransit).toHaveValue("40");
  await expect.soft(fWalkOrBike).toHaveValue("20");
  expect(
    await page.isChecked('text=Baseline 신재생 에너지 사용 >> input[type="checkbox"]')
  ).toBeTruthy();
  await expect.soft(bCompanySize).toHaveValue("2000");
  await expect.soft(bAsia).toHaveValue("10");
  await expect.soft(bOceana).toHaveValue("100");
  // RESET 값 확인
  await page.locator("text=Reset").click();
  // baseline 기복 값 적용 됫는지 확인
  await expect.soft(bCompanyEmployeeSize).toHaveValue("100");
  await expect.soft(bGasoline).toHaveValue("47");
  await expect.soft(bDiesel).toHaveValue("39");
  await expect.soft(bLPG).toHaveValue("8");
  await expect.soft(bHydrogen).toHaveValue("2");
  await expect.soft(bElectric).toHaveValue("4");
  await expect.soft(bSlider).toHaveValue(`6`);
  await expect.soft(bCompanyGasPrice).toHaveValue("5000");
  await expect.soft(bDistance).toHaveValue("14");
  await expect.soft(bCar).toHaveValue("36");
  await expect.soft(bPublicTransit).toHaveValue("40");
  await expect.soft(bWalkOrBike).toHaveValue("24");
  expect(
    await page.isChecked('text=Baseline 신재생 에너지 사용 >> input[type="checkbox"]')
  ).toBeFalsy();
  await expect.soft(bCompanySize).toHaveValue("1000");
  await expect.soft(bAsia).toHaveValue("0");
  await expect.soft(bOceana).toHaveValue("0");
  // forecast 기복 값 적용 됫는지 확인
  await expect.soft(fCompanyEmployeeSize).toHaveValue("100");
  await expect.soft(fGasoline).toHaveValue("47");
  await expect.soft(fDiesel).toHaveValue("39");
  await expect.soft(fLPG).toHaveValue("8");
  await expect.soft(fHydrogen).toHaveValue("2");
  await expect.soft(fElectric).toHaveValue("4");
  await expect.soft(fCompanyGasPrice).toHaveValue("5000");
  await expect.soft(fSlider).toHaveValue(`6`);
  await expect.soft(fDistance).toHaveValue("14");
  await expect.soft(fCar).toHaveValue("36");
  await expect.soft(fPublicTransit).toHaveValue("40");
  await expect.soft(fWalkOrBike).toHaveValue("24");
  expect(
    await page.isChecked('text=Forecast 신재생 에너지 사용 >> input[type="checkbox"]')
  ).toBeFalsy();
  await expect.soft(fCompanySize).toHaveValue("1000");
  await expect.soft(fAsia).toHaveValue("0");
  await expect.soft(fOceana).toHaveValue("0");
});
