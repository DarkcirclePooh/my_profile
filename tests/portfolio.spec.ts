import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

for (const locale of ['ko', 'en'] as const) {
  const path = locale === 'ko' ? './' : './en/';

  test(`${locale}: static route, metadata, assets and career content`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('response', (response) => {
      if (response.status() >= 400)
        errors.push(`${response.status()}: ${response.url()}`);
    });
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', locale);
    await expect(page).toHaveTitle(/Bosoo Kim/);
    await expect(page.locator('h1')).toContainText(
      locale === 'ko' ? '통신 인프라의' : 'Engineering the',
    );
    const canonical = `https://darkcirclepooh.github.io/my_profile/${locale === 'en' ? 'en/' : ''}`;
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      canonical,
    );
    await expect(page.locator('link[hreflang="ko"]')).toHaveAttribute(
      'href',
      'https://darkcirclepooh.github.io/my_profile/',
    );
    await expect(page.locator('link[hreflang="en"]')).toHaveAttribute(
      'href',
      'https://darkcirclepooh.github.io/my_profile/en/',
    );
    await expect(page.locator('.timeline-item')).toHaveCount(4);
    for (const text of [
      '2022 — 2026',
      '2010 — 2022',
      '2005 — 2010',
      '2003 — 2005',
      'VZW',
      'AT&T',
      'T-Mobile',
      'Ericsson',
      'Nokia',
      'VoLTE',
      'SRVCC',
      'Carrier Aggregation',
      '5G NR EN-DC',
      '5G NR SA',
      'MBMS',
      'BSP',
      'IMS',
      'Push-to-Talk',
    ]) {
      await expect(page.locator('.timeline')).toContainText(text);
    }
    await expect(page.locator('.email-link')).toHaveAttribute(
      'href',
      'mailto:darkcirclepooh@gmail.com',
    );
    await expect(page.locator('.contact-links > a')).toHaveAttribute(
      'href',
      'https://github.com/DarkcirclePooh',
    );
    await page.evaluate(() => document.fonts.ready);
    await page.reload();
    await expect(page.locator('h1')).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    await test.info().attach('portfolio-preview', {
      body: await page.screenshot({ fullPage: true }),
      contentType: 'image/png',
    });
    expect(errors).toEqual([]);
  });

  test(`${locale}: responsive layout has no horizontal overflow`, async ({
    page,
  }) => {
    for (const width of [320, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      const layout = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        document: document.documentElement.scrollWidth,
        body: document.body.scrollWidth,
      }));
      expect(
        layout.document,
        `document width at ${width}px`,
      ).toBeLessThanOrEqual(layout.viewport);
      expect(layout.body, `body width at ${width}px`).toBeLessThanOrEqual(
        layout.viewport,
      );
      await expect(page.locator('.email-link')).toBeVisible();
    }
  });

  test(`${locale}: WCAG accessibility scan`, async ({ page }) => {
    await page.goto(path);
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    expect(result.violations).toEqual([]);
  });
}

test('language links preserve the current section in both directions', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./');
  await page.locator('.main-nav a[href="#journey"]').click();
  await expect(page.locator('[data-language="en"]')).toHaveAttribute(
    'href',
    /\/my_profile\/en\/#journey$/,
  );
  await page.locator('[data-language="en"]').click();
  await expect(page).toHaveURL(/\/my_profile\/en\/#journey$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await expect(page.locator('[data-nav="journey"]')).toHaveAttribute(
    'aria-current',
    'location',
  );
  await page.locator('.main-nav a[href="#contact"]').click();
  await expect(page.locator('[data-language="ko"]')).toHaveAttribute(
    'href',
    /\/my_profile\/#contact$/,
  );
  await page.locator('[data-language="ko"]').click();
  await expect(page).toHaveURL(/\/my_profile\/#contact$/);
  await expect(page.locator('html')).toHaveAttribute('lang', 'ko');
});

test('keyboard navigation exposes the skip link and focus styling', async ({
  page,
}) => {
  await page.goto('./');
  await page.keyboard.press('Tab');
  const skip = page.locator('.skip-link');
  await expect(skip).toBeFocused();
  await expect(skip).toBeInViewport();
  await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/#main$/);
  await page.keyboard.press('Tab');
  const focusedOutline = await page.evaluate(
    () => getComputedStyle(document.activeElement!).outlineStyle,
  );
  expect(focusedOutline).not.toBe('none');
});

test('scroll highlights career nodes and respects reduced motion', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('./#journey');
  const first = page.locator('[data-experience="0"]');
  await first.scrollIntoViewIfNeeded();
  await expect(first).toHaveClass(/is-active/);
  const second = page.locator('[data-experience="1"]');
  await second.evaluate((element) =>
    element.scrollIntoView({ block: 'start', behavior: 'instant' }),
  );
  await expect(second).toHaveClass(/is-active/);
  await expect(first).not.toHaveClass(/is-active/);
  expect(
    await page
      .locator('html')
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe('auto');
  expect(
    await page
      .locator('.sphere-motion')
      .evaluate((element) => getComputedStyle(element).rotate),
  ).toBe('0deg');
});

test('both languages remain readable without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  for (const path of [
    'http://127.0.0.1:4321/my_profile/',
    'http://127.0.0.1:4321/my_profile/en/',
  ]) {
    await page.goto(path);
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('.timeline-item')).toHaveCount(4);
    await expect(page.locator('.timeline')).toContainText('CNF');
    await expect(page.locator('.email-link')).toBeVisible();
  }
  await page.locator('[data-language="ko"]').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'ko');
  await context.close();
});
