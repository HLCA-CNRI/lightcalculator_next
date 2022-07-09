import {test, expect} from "@playwright/test";
// 기본값 적용
test("Forecast Reset Button Test", async ({page}) => {
  // Go to https://lc.cnrikorea.com/
  await page.goto("https://lc.cnrikorea.com/");
  // Baseline 차량 종류별
  const gasoline = page.locator('text=Forecast휘발유 >> input[type="number"]').first();
  const diesel = page.locator('text=Forecast휘발유 >> input[type="number"]').nth(1);
  const lpg = page.locator('text=Forecast휘발유 >> input[type="number"]').nth(2);
  const hydrogen = page.locator('text=Forecast휘발유 >> input[type="number"]').nth(3);
  const electric = page.locator('text=Forecast휘발유 >> input[type="number"]').nth(4);
  // 휘발류
  await gasoline.fill("100");
  await expect.soft(gasoline).toHaveValue("100");

  // 경유
  await diesel.fill("100");
  await expect.soft(diesel).toHaveValue("100");

  // LPG
  await lpg.fill("100");
  await expect.soft(lpg).toHaveValue("100");

  // 수소
  await hydrogen.fill("100");
  await expect.soft(hydrogen).toHaveValue("100");

  // 전기
  await electric.fill("100");
  await expect.soft(electric).toHaveValue("100");

  // 차량 종류별 기본 값 버튼 누름
  await page.locator("text=Forecast휘발유대경유대LPG대수소대전기대기본값 적용 >> button").click();
  // 기본값 적용됫는지 확인
  await expect.soft(gasoline).toHaveValue("47");
  await expect.soft(diesel).toHaveValue("39");
  await expect.soft(lpg).toHaveValue("8");
  await expect.soft(hydrogen).toHaveValue("2");
  await expect.soft(electric).toHaveValue("4");
  // Baseline 출퇴근 거리 및 방식
  const distance = page.locator('text=Forecast평균 출퇴근 거리km >> input[type="number"]').first();
  const car = page.locator('text=Forecast평균 출퇴근 거리km >> input[type="number"]').nth(1);
  const publicTransit = page
    .locator('text=Forecast평균 출퇴근 거리km >> input[type="number"]')
    .nth(2);
  const walkOrBike = page.locator('text=Forecast평균 출퇴근 거리km >> input[type="number"]').nth(3);
  // 평균 출퇴근 거리
  await distance.fill("20");
  await expect.soft(distance).toHaveValue("20");

  // 자동차 출퇴근 거리
  await car.fill("40");
  await expect.soft(car).toHaveValue("40");

  // 대중교통 출퇴근 거리
  await publicTransit.fill("30");
  await expect.soft(publicTransit).toHaveValue("30");

  // 도보 및 자전거
  await walkOrBike.fill("30");
  await expect.soft(walkOrBike).toHaveValue("30");

  // 출퇴근 거리 및 방식 기본 값 적용 버튼 누름
  await page
    .locator("text=Forecast평균 출퇴근 거리km자동차%대중교통%도보 및 자전거%기본값 적용 >> button")
    .click();
  // 기본값 적용됫는지 확인
  await expect.soft(distance).toHaveValue("14");
  await expect.soft(car).toHaveValue("36");
  await expect.soft(publicTransit).toHaveValue("40");
  await expect.soft(walkOrBike).toHaveValue("24");
});
