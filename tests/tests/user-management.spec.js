import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
    await page.getByRole('link', { name: 'About', exact: true }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Services' }).click();
    await page.getByRole('link', { name: 'Minerals', exact: true }).click();
    await page.getByRole('link', { name: 'Logistics', exact: true }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Home' }).click();
    await page.getByRole('button', { name: '-Second Export Quote', description: '60-Second Export Quote', exact: true }).click();
    await page.getByRole('button', { name: 'A Pink Himalayan Salt' }).click();
    await page.getByRole('button', { name: 'C 5–20 Metric Tons' }).click();
    await page.getByRole('button', { name: 'B Middle East' }).click();
    await page.getByRole('button', { name: 'D 3–6 months' }).click();
    await page.getByRole('textbox', { name: 'your@email.com' }).click();
    await page.getByRole('textbox', { name: 'your@email.com' }).fill('testthemail@gmail.com');
    await page.getByRole('button', { name: 'Send My Quote' }).click();
    await page.getByRole('link', { name: 'Submit Full Inquiry' }).click();
    await page.getByRole('button', { name: 'Close export quote' }).click();
});