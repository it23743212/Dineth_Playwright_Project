import { test, expect } from '@playwright/test';

test('translate singlish to sinhala', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  
  await page.locator('textarea').fill('parisaraya kiyannea minisaath athuluva siyalu jiiviin jiivathvana vatapitaavayi.eyata Bhuumiya, jalaya, vaayugoolaya, saththava lookaya saha svaaBhaavika sampath siyallama aethulath vea.parisaraya minisaagea jiivithayata athYAvashYA vana athara aahaara, jalaya, vaasaya kiriimea sThaana saha jiivithaya pavathvaagena yaamata avashYA siyalu dhea eyin laebea');

  // Wait for real-time translation
  await page.waitForTimeout(2000);

  // Get translated output (same textarea updates)
  const output = await page.locator('textarea').inputValue();

});