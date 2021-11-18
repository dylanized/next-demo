const { test, expect } = require('@playwright/test');

// set domain to env or localhost
const domain = process.env['DOMAIN'] || 'http://localhost:3000';

test('basic test', async ({ page }) => {
  await page.goto(domain);
  const title = page.locator('h1');
  await expect(title).toHaveText('Welcome to Next.js!');
});
