// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  timeout: 30000,

  use: {
    // Base URL of the application
    baseURL: 'https://tichi-app-webapp-stage.web.app',

    browserName: 'chromium',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'on-first-retry'
  },

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ]
});