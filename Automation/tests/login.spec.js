const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const testData = require('../utils/testData');

test.describe('Login Module', () => {

    test('Valid Login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.login(
            testData.login.validEmail,
            testData.login.validPassword
        );

    });

    test('Invalid Email', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.fillEmail(testData.login.invalidEmail);

        const validationMessage = await loginPage.getEmailValidationMessage();

        expect(validationMessage).toContain('@');

    });

    test('Invalid Password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.fillEmail(testData.login.validEmail);

        await loginPage.clickContinue();

        await loginPage.fillPassword(testData.login.invalidPassword);

        await loginPage.clickLogin();

    });

    test('Empty Email', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.clickContinue();

        await expect(page.getByText('Email is required')).toBeVisible();

    });

    test('Empty Password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.fillEmail(testData.login.validEmail);

        await loginPage.clickContinue();

        await loginPage.clickLogin();

        await expect(page.getByText('Password is required')).toBeVisible();

    });

    test('Empty Fields', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate();

        await loginPage.clickContinue();

        await expect(page.getByText('Email is required')).toBeVisible();

    });

});