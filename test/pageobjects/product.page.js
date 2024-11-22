import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */
    get addToCartBtn () {
        return $$('button.btn_inventory');
    }
    get cartBtn(){
        return $('[data-icon="shopping-cart"]')
    }

    async AddBackpackAndJacketToCart(){
        await this.addToCartBtn[0].click();
        await this.addToCartBtn[3].click();
    }
    async GoToCart(){
        await this.cartBtn.click();
    }
}

export default new ProductPage();
