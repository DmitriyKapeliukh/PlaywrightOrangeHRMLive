import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly Username: Locator;
    readonly Password: Locator;
    readonly LoginAlert: Locator;
    readonly LoginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Username = page.getByPlaceholder('Username');
        this.Password = page.getByPlaceholder('Password');
        this.LoginButton = page.getByRole('button', { name: 'Login' });
        this.LoginAlert = page.getByRole('alert').locator('div').filter({ hasText: 'Invalid credentials' });
    }

    async goto() {
        await this.page.goto('web/index.php/auth/login');
    }

    async signIn(userName: string, password: string) {
        await this.Username.fill(userName);
        await this.Password.fill(password);
        await this.LoginButton.click();
    }

    async getLoginAlert() {
        await expect(this.LoginAlert).toBeVisible();
    }

    async loginAlertToBeDisabled() {
        await expect(this.LoginAlert).toBeDisabled();
    }
}