import {test, expect} from "@playwright/test";

test("Forecast Number Input Test", async ({page}) => {
  // Go to https://lc.cnrikorea.com/
  await page.goto("https://lc.cnrikorea.com");
  // Forecast 임직원 수 input을 100 -> 500, 그리고 체크.
  await page.fill('text=Forecast명 >> input[type="number"]', "500");
  await expect.soft(page.locator('text=Forecast명 >> input[type="number"]')).toHaveValue(`500`);
  // Forecast 차량 종류별
  // 휘발류
  const gasoline = page.locator('text=Forecast휘발유 >> input[type="number"]').first();
  await gasoline.fill("1");
  await expect.soft(gasoline).toHaveValue("1");
  // 경유
  const diesel = page.locator('text=Forecast휘발유 >> input[type="number"]').nth(1);
  await diesel.fill("2");
  await expect.soft(diesel).toHaveValue("2");
  // LPG
  const lpg = page.locator('text=Forecast휘발유 >> input[type="number"]').nth(2);
  await lpg.fill("3");
  await expect.soft(lpg).toHaveValue("3");
  // 수소
  const hydrogen = page.locator('text=Forecast휘발유 >> input[type="number"]').nth(3);
  await hydrogen.fill("3");
  await expect.soft(hydrogen).toHaveValue("3");
  // 전기
  const electric = page.locator('text=Forecast휘발유 >> input[type="number"]').nth(4);
  await electric.fill("3");
  await expect.soft(electric).toHaveValue("3");
  // Forecast 차량 연료 비용
  await page.fill('text=Forecast만원 >> input[type="number"]', "10000");
  await expect.soft(page.locator('text=Forecast만원 >> input[type="number"]')).toHaveValue(`10000`);
  // Forecast 출퇴근 거리 및 방식
  // 평균 출퇴근 거리
  const distance = page.locator('text=Forecast평균 출퇴근 거리km >> input[type="number"]').first();
  await distance.fill("20");
  await expect.soft(distance).toHaveValue("20");
  // 자동차 출퇴근 거리
  const car = page.locator('text=Forecast평균 출퇴근 거리km >> input[type="number"]').nth(1);
  await car.fill("40");
  await expect.soft(car).toHaveValue("40");
  // 대중교통 출퇴근 거리
  const publicTransit = page
    .locator('text=Forecast평균 출퇴근 거리km >> input[type="number"]')
    .nth(2);
  await publicTransit.fill("24");
  await expect.soft(publicTransit).toHaveValue("24");
  // 도보 및 자전거
  const walkOrBike = page.locator('text=Forecast평균 출퇴근 거리km >> input[type="number"]').nth(3);
  await walkOrBike.fill("40");
  await expect.soft(walkOrBike).toHaveValue("40");
  // Forecast 사무실 면적
  await page.fill('text=Forecastm2 >> input[type="number"]', `2000`);
  await expect.soft(page.locator('text=Forecastm2 >> input[type="number"]')).toHaveValue(`2000`);
  // Forecast 왕복 비행 출장
  // 아사아
  const asia = page.locator(".w-full > div > .flex > .w-12").first();
  await asia.fill("1");
  await expect.soft(asia).toHaveValue("1");
  // 유럽
  const europe = page.locator(".w-full > div > .flex > .w-12").nth(1);
  await europe.fill("2");
  await expect.soft(europe).toHaveValue("2");
  // 북아메리카
  const northAmerica = page.locator(".w-full > div > .flex > .w-12").nth(2);
  await northAmerica.fill("3");
  await expect.soft(northAmerica).toHaveValue("3");
  // 남아메리카
  const southAmerica = page.locator(".w-full > div > .flex > .w-12").nth(3);
  await southAmerica.fill("4");
  await expect.soft(southAmerica).toHaveValue("4");
  // 오세아니아
  const oceana = page.locator(".w-full > div > .flex > .w-12").nth(4);
  await oceana.fill("5");
  await expect.soft(oceana).toHaveValue("5");
  // 아프리카
  const africa = page.locator(".w-full > div > .flex > .w-12").nth(5);
  await africa.fill("6");
  await expect.soft(africa).toHaveValue("6");
});
