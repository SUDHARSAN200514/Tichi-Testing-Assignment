class LoginPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.email = page.locator('#email');
        this.password = page.getByPlaceholder('Enter your password');
        this.continueButton = page.getByRole('button', { name: 'Continue', exact: true });
        this.loginButton = page.getByRole('button', { name: 'Login' });
    }

    // Navigate to Login Page
    async navigate() {
        await this.page.goto('/login');
    }

    // Complete Login Flow
    async login(email, password) {

        if (email !== "") {
            await this.email.fill(email);
        }

        await this.continueButton.click();

        if (password !== "") {
            await this.password.fill(password);
        }

        await this.loginButton.click();
    }

    // Fill Email
    async fillEmail(email) {
        await this.email.fill(email);
    }

    // Click Continue
    async clickContinue() {
        await this.continueButton.click();
    }

    // Fill Password
    async fillPassword(password) {
        await this.password.fill(password);
    }

    // Click Login
    async clickLogin() {
        await this.loginButton.click();
    }

    // Get Email Value
    async getEmailValue() {
        return await this.email.inputValue();
    }

    // Get Password Value
    async getPasswordValue() {
        return await this.password.inputValue();
    }

    // Browser Validation Message
    async getEmailValidationMessage() {
        return await this.email.evaluate(el => el.validationMessage);
    }
}

module.exports = LoginPage;