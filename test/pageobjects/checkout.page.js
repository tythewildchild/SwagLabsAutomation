import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CartPage extends Page {
    /**
     * define selectors using getter methods
     */
    get firstNameInput(){
        return $('#first-name')
    }
    get lastNameInput(){
        return $('#last-name')
    }
    get zipCodeInput(){
        return $('#postal-code')
    }
    get errorMessage(){
        return $('[data-test="error"]')
    }
    get errorMessageXButton(){
        return $('[data-test="error"] button svg')
    }
    get continueButton(){
        return $('.btn_primary')
    }
    get cartItems(){
        return $$('.cart_item')
    }
    get itemTotal(){
        return $('.summary_subtotal_label')
    }
    get tax(){
        return $('.summary_tax_label')
    }
    get total(){
        return $('.summary_total_label')
    }
    get finishButton(){
        return $('.cart_footer a.btn_action')
    }

    async VerifyFirstNameRequiredField(){
        //Submit without first name filled in. Checks for error message.
        await browser.pause(300);
        await this.lastNameInput.waitForDisplayed();
        await this.lastNameInput.setValue('John');
        await browser.pause(300);
        await this.zipCodeInput.waitForDisplayed();
        await this.zipCodeInput.setValue('12345')
        await this.continueButton.click();
        await this.errorMessage.waitForDisplayed();
        await browser.pause(3000);
        let errorMessage = await this.errorMessage.getText();
        if(errorMessage.includes('First Name is required')){

        }
        else{
            console.log(`errorMessage reads incorrectly: ${await this.errorMessage.getText()}`)
        }
        await this.errorMessageXButton.waitForClickable();
        await this.errorMessageXButton.click();
        await browser.pause(300);
        await this.firstNameInput.setValue('Jordan')
        await browser.pause(1000);
        await this.continueButton.waitForClickable();
        await this.continueButton.click();
    }
    async VerifyItemsInCheckout(){
        let itemCount = await this.cartItems.length;
        console.log(`Items in cart: ${itemCount}`)
        let itemTotal = await this.itemTotal.getText();
        let tax = await this.tax.getText();
        let total = await this.total.getText();
        console.log(`${itemTotal}\n${tax}\n${total}`)
        await browser.pause(5000);
        await this.finishButton.waitForClickable();
        await this.finishButton.click();
        await browser.pause(5000);
           
    }

    async CheckoutFirstPage(){
        await this.VerifyFirstNameRequiredField();
    }
    async CheckoutSecondPage(){
        await this.VerifyItemsInCheckout();
    }
 
}

export default new CartPage();
