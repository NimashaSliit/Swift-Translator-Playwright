// @ts-check
import { test, expect } from '@playwright/test';

test('Pos_Fun_001 - Simple present tense phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('mama kaeema kaevaa.',{delay : 100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('මම කෑම කැවා.', { timeout: 20000 });
});

test('Pos_Fun_002 - Compound sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('oyaa gedhara yanne kadavatha paththen nedha?ehenam oyaa yadhdhi mee badu tika aragena yanna',{delay : 100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('ඔයා ගෙදර යන්නෙ කඩවත පත්තෙන් නේද?එහෙනම් ඔයා යද්දි මේ බඩු ටික අරගෙන යන්න', { timeout: 20000 });
});

test('Pos_Fun_003 - Complex sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('kochchara vaeda thibbath meka karanna epaeyi.', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('කොච්චර වැඩ තිබ්බත් මෙක කරන්න එපැයි.', { timeout: 20000 });
});

test('Pos_Fun_004 - Interrogative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('oyaa kavadhdha aayee maava balannna enne?', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('ඔයා කවද්ද ආයේ මාව බලන්න්න එන්නෙ?', { timeout: 20000 });
});

test('Pos_Fun_005 - imperative sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('oyaa issarahata yanna naeththan pitipasse Lamayinta ida naee', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('ඔයා ඉස්සරහට යන්න නැත්තන් පිටිපස්සෙ ළමයින්ට ඉඩ නෑ', { timeout: 20000 });
});

test('Pos_Fun_006 - simple sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('maamaa saha nandhaa heta nuvara idhan enavaa', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('මාමා සහ නන්දා හෙට නුවර ඉදන් එනවා', { timeout: 20000 });
});

test('Pos_Fun_007 - Mixed sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('oyaa last week mata balen kaema kavuvane, passee mata asaniipa unaa', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('ඔයා last week මට බලෙන් කැම කවුවනෙ, පස්සේ මට අසනීප උනා', { timeout: 20000 });
});

test('Pos_Fun_008 - Greetings', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('SuBha udhaeesanak!,', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('සුභ උදෑසනක්!', { timeout: 20000 });
});

test('Pos_Fun_009 - Polite Request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('oyalata puluvandha mata udhavu karanna?,', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('ඔයලට පුලුවන්ද මට උදවු කරන්න?', { timeout: 20000 });
});

test('Pos_Fun_010 - Reponse', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('hari api eeka karala dhennam,', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('හරි අපි ඒක කරල දෙන්නම්', { timeout: 20000 });
});

test('Pos_Fun_011 - Polite phrasing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('mata adha 5 Pm class arenavaa, oyaata puluvandha mava ganna enna', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('මට අද 5 Pm class අරෙනවා, ඔයාට පුලුවන්ද මව ගන්න එන්න', { timeout: 20000 });
});

test('Pos_Fun_012 - informal phrasing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('Aruta enna kiyapan', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('අරුට එන්න කියපන්', { timeout: 20000 });
});

test('Pos_Fun_013 - informal sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('palayan ban yanna', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('පලයන් බන් යන්න', { timeout: 20000 });
});

test('Pos_Fun_014 - frequent day ro day sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('mama bed ekata yanava ehenam mata nidhimathayi', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('මම bed එකට යනව එහෙනම් මට නිදිමතයි', { timeout: 20000 });
});

test('Pos_Fun_015 - Repeated word expressions', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('hari hari eyala anivaarenma heta eyi ', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('හරි හරි එයල අනිවාරෙන්ම හෙට එයි ', { timeout: 20000 });
});

test('Pos_Fun_016 - Negation patterns', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('mata eedheval kohomath karanna baee mokadha mama dhannee naee ', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('මට ඒදෙවල් කොහොමත් කරන්න බෑ මොකද මම දන්නේ නෑ ', { timeout: 20000 });
});

test('Pos_Fun_017 - request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('oya gaava api last semester ekeedhi develop karapu assignment eka thiyanavadha?puluuvannam tikak balala mata eka evannakoo, magee Linkedin eka update karanna onee', {delay :100});

    await page.waitForTimeout(1500);

    const output = page.locator('body');

  await expect(output).toContainText('assignment');
  await expect(output).toContainText('update');
  await expect(output).toContainText('මට');
});

test('Pos_Fun_018 - Plural sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('Api last year galle gihin avee highway bus ekenee, eeka harima karadharai. api mee paara vehicle ekee yamu.', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('අපි last year galle ගිහින් අවේ highway bus එකෙනේ, ඒක හරිම කරදරෛ. අපි මේ පාර vehicle එකේ යමු.', { timeout: 20000 });
});

test('Pos_Fun_019 - Abbrheviations', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('magee savings account ekee Debit card ekata dhiila thiyana contact number eka update karanna onee, naeththan fund transfers karadhdhi OTP ekayi alert ekayi yanne kalin number ekata', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('මගේ savings account එකේ Debit card එකට දීල තියන contact number එක update කරන්න ඔනේ, නැත්තන් fund transfers කරද්දි OTP එකයි alert එකයි යන්නෙ කලින් number එකට', { timeout: 20000 });
});

test('Pos_Fun_020 - Units of Measurement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('oyaata Kaduwela idhan 3 km vagee athulata enna oone ape gedharata enna', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('ඔයාට Kaduwela ඉදන් 3 km වගේ අතුලට එන්න ඕනෙ ape ගෙදරට එන්න', { timeout: 20000 });
});

test('Pos_Fun_021 - slang and colloquial phrasing', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('wow machan ekanam supiri!', {delay :100});

    await page.waitForTimeout(1500);

   const output = page.locator('body');

    await expect(output).toContainText('මච');
    await expect(output).toContainText('සුපිරි');
});

test('Pos_Fun_022 - slang ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('siraavata, uba eka karaadha?', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('සිරාවට, උබ එක කරාද?', { timeout: 20000 });
});

test('Pos_Fun_023 - Plural and Future tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('Api aye plan karamudha trip ekak', {delay :100});

    await page.waitForTimeout(1500);

    const output = page.locator('body');

  await expect(output).toContainText('අපි');
  await expect(output).toContainText('කරමු');
  await expect(output).toContainText('එක');
});

test('Pos_Fun_024 - Slang and Present tense', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
    await inputBox.click();
    await inputBox.fill('');
    await inputBox.type('Ammatasiri! Mata amathaka unaane adha ugee birthday kiyala', {delay :100});

    await page.waitForTimeout(1500);

    await expect(page.locator('body'))
    .toContainText('අම්මටසිරි! මට අමතක උනානෙ අද උගේ birthday කියල', { timeout: 20000 });
});

/*------------Negative test cases--------------*/

test('Neg_Fun_001 - Empty Input Handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type('' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('....', { timeout: 20000 });
});

test('Neg_Fun_002 - Numbers Only Input Handling', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' 123456789' , {delay : 100});

  await page.waitForTimeout(1500);
// Check if translation happened
  const outputText = await page.locator('body').innerText();

  // If numbers are not translated, fail the test with a clear message
  if (outputText.includes('123456789') || outputText.trim() === '') {
    throw new Error('Test Failed: Numbers only input is invalid and cannot be translated.');
  }
  await expect(page.locator('body'))
    .toContainText('', { timeout: 20000 });
});

test('Neg_Fun_003 - Incorrect handling of excessive punctuation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' oyaa heta enavadhaa???' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('ඔයා හෙට එනවද?', { timeout: 20000 });
});

test('Neg_Fun_004 - Incorrect date format interpretation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Seminar eka 25-02-2025 man hithanne.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('Seminar eka 02-25-2025 man hithanne.', { timeout: 20000 });
});

test('Neg_Fun_005 - Incorrect conversion of long mixed paragraph', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type('api project report eka submit karanna oonee heta. Teams meeting eka 3.00 PM lu thiyennee.mama documents tika PDF vidhihata attach kara.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText(`අපි project report එක submit කරන්න ඕනෙ හෙට. Teams meeting එක 3.00 PM ලු තියෙන්නේ.මම documents ටික PDF විදිහට attach කරා.
`, { timeout: 20000 });
});

test('Neg_Fun_006 - Sinhala Input Instead of Singlish', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' මම හෙට මාතර යනවා' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('Mama heta maathara yanavaa', { timeout: 20000 });
});

test('Neg_Fun_007 - Multi-line input formatting failure', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type( `mata badagini
monaahari kannonee
api eliyata yandha?`, {delay : 100});

  await page.waitForTimeout(1500);

  const outputText = await page.locator('body').innerText();

  // ❌ Fail if line breaks are NOT present (merged incorrectly)
  if (!outputText.includes('\n')) {
    throw new Error(
      'Test Failed: Multi-line input was incorrectly merged into a single line.'
    );
  }

  await expect(page.locator('body'))
    .toContainText('මට බඩගිනි මොනාහරි කන්නොනේ අපි එලියට යන්ද?', { timeout: 20000 });
});

test('Neg_Fun_008 - Sentence with invalid numeric unit', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' meeka -20 kg vitharayi.' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('Invalid', { timeout: 20000 });
});

test('Neg_Fun_009 - Symbols Handling ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type('*65#$3@' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('Invalid output', { timeout: 20000 });
});

test('Neg_Fun_010- Multi-line paragraph with punctuation confusion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(`mama palliyata yanavaa,
nangi class yanavaa!
boodhipuujava patan ganne kiyatadha ?
` , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('මම පල්ලියට යනව,නන්ගි class යනවා!!!බෝදිපූජව පටන් ගන්නෙ කියටද ??', { timeout: 20000 });
});

test('Pos_UI_001- Translate Mixed Singlish Words to Sinhala', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' Ane, ikmanata class yanna oni' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('අනෙ, ඉක්මනට class යන්න ඔනි', { timeout: 20000 });
});

test('Neg_UI_001- Real-Time Translation of Symbols / Numbers Only', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });

  await inputBox.click();
  await inputBox.fill('');
  await inputBox.type(' 12345 !!!! $$$' , {delay : 100});

  await page.waitForTimeout(1500);

  await expect(page.locator('body'))
    .toContainText('Invalid input', { timeout: 20000 });
});






