class LoginPage {
    constructor(page) {
        this.page = page;

        this.email = page.locator('#email');
        this.password = page.getByPlaceholder('Enter your password');
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    async navigate() {
        await this.page.goto('/login');
    }

    async login(email, password) {
        await this.email.fill(email);
        await this.password.fill(password);
        await this.loginButton.click();
    }
}

module.exports = LoginPage;