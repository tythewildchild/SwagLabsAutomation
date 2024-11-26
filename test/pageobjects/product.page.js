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
    get itemPrice(){
        return $$('.inventory_item_price')
    }

    async AddBackpackAndJacketToCart(){
        await this.addToCartBtn[0].click();
        await browser.pause(3000);
        await this.addToCartBtn[3].scrollIntoView();
        await this.addToCartBtn[3].click();
        await browser.pause(3000);
        let backpackPrice = await this.itemPrice[0].getText();
        let jacketPrice = await this.itemPrice[3].getText();
        let itemPrices = [backpackPrice, jacketPrice];
        return itemPrices;
    }
    async GoToCart(){
        await this.cartBtn.click();
    }
}

export default new ProductPage();
