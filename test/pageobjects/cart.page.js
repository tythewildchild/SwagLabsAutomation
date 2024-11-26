import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get cartHeader () {
        return $('.subheader');
    }
    get checkoutBtn(){
        return $('a.checkout_button')
    }

    async VerifyCartPage(){
        let cartHeader = await this.cartHeader
        await expect(cartHeader).toHaveText('Your Cart')
        await browser.pause(1000);
    }
    async CheckoutFromCartPage(){
        await this.checkoutBtn.click();
    }
}

export default new CartPage();
