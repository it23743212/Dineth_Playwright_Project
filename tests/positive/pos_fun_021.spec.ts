import { test, expect } from '@playwright/test';

test('translate singlish to sinhala', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  
  await page.locator('textarea').fill('Api nivaaduvata gedhara yanavaa                        oyath yanavadha?                   ');

  // Wait for real-time translation
  await page.waitForTimeout(2000);

  // Get translated output (same textarea updates)
  const output = await page.locator('textarea').inputValue();

});