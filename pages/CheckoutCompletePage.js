export class CheckoutCompletePage {
  constructor(page) {
    this.page = page
    this.pageTitle = page.locator('.title')
    this.completeHeader = page.locator('[data-test="complete-header"]')
    this.completeText = page.locator('[data-test="complete-text"]')
    this.ponyExpressImage = page.locator('[data-test="pony-express"]')
    this.backHomeButton = page.locator('[data-test="back-to-products"]')
  }

  async getTitle() {
    return await this.pageTitle.innerText()
  }

  async getHeaderText() {
    return await this.completeHeader.innerText()
  }

  async getCompleteText() {
    return await this.completeText.innerText()
  }

  async isPonyImageVisible() {
    return await this.ponyExpressImage.isVisible()
  }

  async clickBackHome() {
    await this.backHomeButton.click()
  }
}