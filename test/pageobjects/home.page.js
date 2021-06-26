
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage {
    /**
     * define selectors using getter methods
     */
    get btnBuscar () { return $('//input[@value="Buscar"]') }
    get title () {return $('//a[@title="Findoctor"]')}
    get btnPhysical () {return $('//label[@for="phisical"]')}
    get focus () {return $('//div[@class="input-group focus-div"]')}
    get searchinput() {return $('//input[contains(@placeholder,"¿Buscas a alguien o algo en especifico?"]')}
    get barra (){return $('//input[@id="search-input"]')}
    
    
    async buscar () {
        await (await this.btnBuscar).click();
    }

    async especialidad () {
        await (await this.btnPhysical).click();
    }

    async searchInputs () {
        await (await this.searchinput).click();
    }

    async ingresarinfo (barra){
        await(await this.barra).setValue(barra)
        await (await this.btnBuscar).click();
    }

     open () {
        return browser.url(`/`);
    }
}

module.exports = new HomePage();
