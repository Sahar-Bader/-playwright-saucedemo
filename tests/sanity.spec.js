import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage.js'
import { InventoryPage } from '../pages/InventoryPage.js'
import { CartPage } from '../pages/CartPage.js'
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage.js'
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage.js'
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage.js'
import { URL, USERS, CUSTOMER_INFO } from '../data/testData.js'

test.describe('SauceDemo Sanity Suite', () => {
  let loginPage
  let inventoryPage
  let cartPage
  let checkoutStepOne
  let checkoutStepTwo
  let checkoutComplete

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    inventoryPage = new InventoryPage(page)
    cartPage = new CartPage(page)
    checkoutStepOne = new CheckoutStepOnePage(page)
    checkoutStepTwo = new CheckoutStepTwoPage(page)
    checkoutComplete = new CheckoutCompletePage(page)
    await page.goto(URL.base)
  })

  test('Full Purchase Flow E2E Sanity', async ({ page }) => {
    await loginPage.login(USERS.standard_user.username, USERS.standard_user.password)
    await expect(page).toHaveURL(URL.inventory)

    expect(await inventoryPage.getTitle()).toBe('Products')
    await inventoryPage.addItemByIndex(0)
    await inventoryPage.addItemByIndex(1)
    await expect(inventoryPage.cartBadge).toHaveText('2')
    await inventoryPage.goToCart()

    await expect(page).toHaveURL(URL.cart)
    expect(await cartPage.getTitle()).toBe('Your Cart')
    expect(await cartPage.getItemsCount()).toBe(2)
    await cartPage.clickCheckout()

    await expect(page).toHaveURL(URL.checkoutStepOne)
    expect(await checkoutStepOne.getTitle()).toBe('Checkout: Your Information')
    await checkoutStepOne.fillCustomerFields(
      CUSTOMER_INFO.firstName,
      CUSTOMER_INFO.lastName,
      CUSTOMER_INFO.postalCode
    )
    await checkoutStepOne.clickContinue()

    await expect(page).toHaveURL(URL.checkoutStepTwo)
    expect(await checkoutStepTwo.getTitle()).toBe('Checkout: Overview')
    expect(await checkoutStepTwo.getItemsCount()).toBe(2)

    const totalPrice = await checkoutStepTwo.getTotalPrice()
    expect(totalPrice).toContain('Total: $')
    await checkoutStepTwo.clickFinish()

    await expect(page).toHaveURL(URL.checkoutComplete)
    expect(await checkoutComplete.getTitle()).toBe('Checkout: Complete!')
    expect(await checkoutComplete.getHeaderText()).toBe('Thank you for your order!')
    expect(await checkoutComplete.isPonyImageVisible()).toBeTruthy()

    await checkoutComplete.clickBackHome()
    await expect(page).toHaveURL(URL.inventory)
  })
})