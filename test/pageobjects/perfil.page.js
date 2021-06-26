
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage {
    /**
     * define selectors using getter methods
     */
     get perfiltext () { return $('//a[@class="btn_listing"]') }
    
    async ingresarperfil () {
        await (await this.perfiltext).click();
    }

     open () {
        return browser.url(`/#/search`);
    }
}

module.exports = new ProfilePage();
