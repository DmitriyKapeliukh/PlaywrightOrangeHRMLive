import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardWidget {
    readonly page: Page;
    readonly WidgetName: Locator;
    readonly WidgetBody: Locator;


    constructor(page: Page) {
        this.page = page;
        this.WidgetName = page.locator('[class=orangehrm-dashboard-widget-header]');
        this.WidgetBody = page.locator('.orangehrm-dashboard-widget-body').first();
    }

}