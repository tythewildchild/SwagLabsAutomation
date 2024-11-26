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

    async VerifyCartPage(itemPrices){
        let cartHeader = await this.cartHeader
        await expect(cartHeader).toHaveText('Your Cart')
        await browser.pause(1000);
        for(let i = 0; i < itemPrices.length; i++){
            console.log(`Price of item ${i+1}: ${itemPrices[i]}`)
        }
    }
    async CheckoutFromCartPage(){
        await this.checkoutBtn.waitForClickable();
        await this.checkoutBtn.click();
    }
}

export default new CartPage();
