import { expect, type Locator, type Page } from '@playwright/test';
import {DashboardWidget} from "./DashboardWidget";
import {DashboardSidepanel} from "./DashboardSidepanel";

export class DashboardPage {
    readonly page: Page;
    readonly Sidepanel: DashboardSidepanel;
    readonly Widget: DashboardWidget;
    readonly UserProfileIcon: Locator;

    constructor(page: Page) {
        this.page = page;
        this.Sidepanel = new DashboardSidepanel(page);
        this.Widget = new DashboardWidget(page);
        this.UserProfileIcon = page.getByRole('banner').getByRole('img', { name: 'profile picture' });
    }

    async isDashBoardPageLoaded() {
        await expect(this.page.locator('[class=oxd-sidepanel]')).toBeVisible();
        await expect(this.UserProfileIcon).toBeVisible();
    }

    async getSidepanel() {
        return this.Sidepanel;
    }

    async getWidget() {
        return this.Widget;
    }

    async clickOnUserProfile() {
        await this.UserProfileIcon.click();
    }


}