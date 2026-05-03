import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { InventoryPage } from '../pages/InventoryPage.js'
import { URL, USERS, ERROR_MESSAGES, INVALID_CREDENTIALS } from '../data/testData.js'

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

  for (const user of positiveUsers) {
    test(`Positive Login - User: ${user.username}`, async ({ page }) => {
      await loginPage.login(user.username, user.password)
      await expect(page).toHaveURL(URL.inventory)
      expect(await inventoryPage.getTitle()).toBe('Products')
    })
  }

  test('Negative Login - Locked Out User', async ({ page }) => {
    await loginPage.login(USERS.locked_out_user.username, USERS.locked_out_user.password)
    expect(await loginPage.getErrorMessage()).toBe(ERROR_MESSAGES.lockedOut)
  })

  const negativeScenarios = [
    { 
      desc: 'Correct Username + Wrong Password', 
      user: USERS.standard_user.username, 
      pass: INVALID_CREDENTIALS.password, 
      error: ERROR_MESSAGES.invalidCredentials 
    },
    { 
      desc: 'Wrong Username + Correct Password', 
      user: INVALID_CREDENTIALS.username, 
      pass: USERS.standard_user.password, 
      error: ERROR_MESSAGES.invalidCredentials 
    },
    { 
      desc: 'Wrong Username + Wrong Password', 
      user: INVALID_CREDENTIALS.username, 
      pass: INVALID_CREDENTIALS.password, 
      error: ERROR_MESSAGES.invalidCredentials 
    },
    { 
      desc: 'Empty Username + Correct Password', 
      user: '', 
      pass: USERS.standard_user.password, 
      error: ERROR_MESSAGES.usernameRequired 
    },
    { 
      desc: 'Correct Username + Empty Password', 
      user: USERS.standard_user.username, 
      pass: '', 
      error: ERROR_MESSAGES.passwordRequired 
    },
    { 
      desc: 'Empty Username + Empty Password', 
      user: '', 
      pass: '', 
      error: ERROR_MESSAGES.usernameRequired 
    }
  ]

  for (const scenario of negativeScenarios) {
    test(`Negative Login - ${scenario.desc}`, async ({ page }) => {
      await loginPage.login(scenario.user, scenario.pass)
      expect(await loginPage.getErrorMessage()).toBe(scenario.error)
    })
  }
})