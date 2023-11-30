import {test, expect, Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from "../pages/DashboardPage";

test.describe('Login with credentials', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {

        page.on('console', (msg) => {
            console.log(msg);
        });

        loginPage = new LoginPage(page);
        await page.goto('web/index.php/auth/login');
        console.log('Going to open OrangeHRM login page')
        await expect(page).toHaveTitle('OrangeHRM');
    });

    test('Bad username good password – check validation is correct', async () => {
        console.log('Login with bad credentials')
        await loginPage.signIn('badUserName', 'admin123');
        console.log('Verify login bad credentials error message')
        await loginPage.getLoginAlert();
    })

    test('Good username bad password – check validation is correct', async () => {
        console.log('Login with bad credentials')
        await loginPage.signIn('Admin', 'badPassword');
        console.log('Verify login bad credentials error message')
        await loginPage.getLoginAlert();
    })

    test('Good username and password – make it look like page object', async ({ page }) => {
        console.log('Login with valid credentials')
        await loginPage.signIn('Admin', 'admin123');
        const dashboardPage = new DashboardPage(page);
        console.log('Going to open OrangeHRM dashboard page')
        await dashboardPage.isDashBoardPageLoaded();
        ///
    })

    test('Bad username bad password – fail it on purpose to show on report with recording video attached', async () => {
        console.log('Login with bad credentials')
        await loginPage.signIn('badUserName', 'badPassword');
        await loginPage.loginAlertToBeDisabled();
    })
})