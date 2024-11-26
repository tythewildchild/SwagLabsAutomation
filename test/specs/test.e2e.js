import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ProductPage from '../pageobjects/product.page.js'
import CartPage from '../pageobjects/cart.page.js'
import CheckoutPage from '../pageobjects/checkout.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.incorrectLogin('standard_user', 'incorrect password')
        await LoginPage.login('standard_user', 'secret_sauce')
    })
    it('should add a backpack and fleece jacket to the cart', async () => {
        let itemPrices = await ProductPage.AddBackpackAndJacketToCart();
        await ProductPage.GoToCart();
        await CartPage.VerifyCartPage(itemPrices);
    })

    it('should checkout the backpack and jacket', async () => {
        await CartPage.CheckoutFromCartPage();
        await CheckoutPage.CheckoutFirstPage();
        await CheckoutPage.CheckoutSecondPage();
    })

})

