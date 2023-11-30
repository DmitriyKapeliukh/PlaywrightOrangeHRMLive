import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardSidepanel {
    readonly page: Page;
    readonly Search: Locator;
    readonly Admin: Locator;
    readonly PIM: Locator;
    readonly Leave: Locator;
    readonly Time: Locator;
    readonly Recruitment: Locator;
    readonly MyInfo: Locator;
    readonly Performance: Locator;
    readonly Dashboard: Locator;
    readonly Directory: Locator;
    readonly Maintenance: Locator;
    readonly Claim: Locator;
    readonly Buzz: Locator;


    constructor(page: Page) {
        this.page = page;
        this.Search = page.getByPlaceholder('Search');
        this.Admin = page.getByRole('link', { name: 'Admin' });
        this.PIM = page.getByRole('link', { name: 'PIM' });
        this.Leave = page.getByRole('link', { name: 'Leave' });
        this.Time = page.getByRole('link', { name: 'Time' });
        this.Recruitment = page.getByRole('link', { name: 'Recruitment' });
        this.MyInfo = page.getByRole('link', { name: 'My Info' });
        this.Performance = page.getByRole('link', { name: 'Performance' });
        this.Dashboard = page.getByRole('link', { name: 'Dashboard' });
        this.Directory = page.getByRole('link', { name: 'Directory' });
        this.Maintenance = page.getByRole('link', { name: 'Maintenance' });
        this.Claim = page.getByRole('link', { name: 'Claim' });
        this.Buzz = page.getByRole('link', { name: 'Buzz' });
    }

}