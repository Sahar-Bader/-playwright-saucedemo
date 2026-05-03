export const URL = {
  base: 'https://www.saucedemo.com/',
  inventory: 'https://www.saucedemo.com/inventory.html',
  cart: 'https://www.saucedemo.com/cart.html',
  checkoutStepOne: 'https://www.saucedemo.com/checkout-step-one.html',
  checkoutStepTwo: 'https://www.saucedemo.com/checkout-step-two.html',
  checkoutComplete: 'https://www.saucedemo.com/checkout-complete.html'
}

export const USERS = {
  standard_user: {
    username: 'standard_user',
    password: 'secret_sauce'
  },
  locked_out_user: {
    username: 'locked_out_user',
    password: 'secret_sauce'
  },
  problem_user: {
    username: 'problem_user',
    password: 'secret_sauce'
  },
  performance_glitch_user: {
    username: 'performance_glitch_user',
    password: 'secret_sauce'
  },
  error_user: {
    username: 'error_user',
    password: 'secret_sauce'
  },
  visual_user: {
    username: 'visual_user',
    password: 'secret_sauce'
  }
}

export const INVALID_CREDENTIALS = {
  username: 'invalid_user',
  password: 'invalid_password'
}
export const CUSTOMER_INFO = {
  firstName: 'Sahar',
  lastName: 'Bader',
  postalCode: '85338'
}

export const ERROR_MESSAGES = {
  lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
  invalidCredentials: 'Epic sadface: Username and password do not match any user in this service',
  usernameRequired: 'Epic sadface: Username is required',
  passwordRequired: 'Epic sadface: Password is required',

  unauthorizedInventory: "Epic sadface: You can only access '/inventory.html' when you are logged in.",
  unauthorizedCart: "Epic sadface: You can only access '/cart.html' when you are logged in.",
  unauthorizedCheckoutOne: "Epic sadface: You can only access '/checkout-step-one.html' when you are logged in.",
  unauthorizedCheckoutTwo: "Epic sadface: You can only access '/checkout-step-two.html' when you are logged in.",

  firstNameRequired: 'Error: First Name is required',
  lastNameRequired: 'Error: Last Name is required',
  postalCodeRequired: 'Error: Postal Code is required'
}