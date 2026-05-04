import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { InventoryPage } from '../pages/InventoryPage.js'
import { URL, USERS, ERROR_MESSAGES } from '../data/testData.js'
import { NEGATIVE_SCENARIOS } from '../data/negativeScenarios.js'

test.describe('SauceDemo Login Suite', () => {
  let loginPage
  let inventoryPage

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    inventoryPage = new InventoryPage(page)
    await page.goto(URL.base)
  })

  const positiveUsers = [
    USERS.standard_user,
    USERS.problem_user,
    USERS.performance_glitch_user,
    USERS.error_user,
    USERS.visual_user
  ]

  positiveUsers.forEach((user) => {
    test(`Positive Login - User: ${user.username}`, async ({ page }) => {
      await loginPage.login(user.username, user.password)
      await expect(page).toHaveURL(URL.inventory)
      expect(await inventoryPage.getTitle()).toBe('Products')
    })
  })

  test('Negative Login - Locked Out User', async ({ page }) => {
    await loginPage.login(USERS.locked_out_user.username, USERS.locked_out_user.password)
    expect(await loginPage.getErrorMessage()).toBe(ERROR_MESSAGES.lockedOut)
  })

  NEGATIVE_SCENARIOS.forEach((scenario) => {
    test(`Negative Login - ${scenario.testName}`, async ({ page }) => {
      await loginPage.login(scenario.username, scenario.password)
      expect(await loginPage.getErrorMessage()).toBe(scenario.expectedError)
    })
  })
})