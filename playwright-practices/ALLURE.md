# Allure reports

From the `playwright-practices` folder, install dependencies with `npm install`.

The Allure reporter is currently commented out in `playwright.config.ts` because installation failed with insufficient disk space. After installation succeeds, uncomment the `allure-playwright` reporter entry to enable Allure results.

Run the local webtable test:

```powershell
npm test -- tests/webtable.spec.ts --project=chromium
npm run allure:generate
npm run allure:open
```

Run all configured tests with `npm test`. Run the generate command even if tests fail to inspect their failures. Stop the report server with Ctrl+C.

The Allure reporter saves test results and attachments in `allure-results/`; the generated website is in `allure-report/`. These folders are ignored by Git. Playwright's existing HTML report remains available.

Results accumulate across runs. For a fresh report, delete the generated `allure-results` folder before running tests again.

This project uses the Node.js-based Allure 3 CLI (`allure`) and the `allure-playwright` reporter. No Java installation is required. Screenshots and videos follow the failure-only settings in `playwright.config.ts`; traces are captured on the first retry when retries are enabled.

Official documentation: https://allurereport.org/docs/playwright/
