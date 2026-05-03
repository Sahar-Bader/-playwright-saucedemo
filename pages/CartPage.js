export class CartPage {
  constructor(page) {
    this.page = page
    this.pageTitle = page.locator('.title')
    this.cartItems = page.locator('.cart_item')
    this.itemPrices = page.locator('.inventory_item_price')
    this.itemNames = page.locator('.inventory_item_name')
    this.quantityLabels = page.locator('.cart_quantity')
    this.removeButtons = page.locator('[data-test^="remove"]')
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]')
    this.checkoutButton = page.locator('[data-test="checkout"]')
  }

  async getTitle() {
    return await this.pageTitle.innerText()
  }

  async getItemsCount() {
    return await this.cartItems.count()
  }

  async getItemName(index) {
    return await this.itemNames.nth(index).innerText()
  }

  async getItemPrice(index) {
    return await this.itemPrices.nth(index).innerText()
  }

  async getItemQuantity(index) {
    return await this.quantityLabels.nth(index).innerText()
  }

  async removeItemByIndex(index) {
    await this.removeButtons.nth(index).click()
  }

  async clickContinueShopping() {
    await this.continueShoppingButton.click()
  }

  async clickCheckout() {
    await this.checkoutButton.click()
  }
}