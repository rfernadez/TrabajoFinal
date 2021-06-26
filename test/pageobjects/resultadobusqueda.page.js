
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ResultsPage {
    /**
     * define selectors using getter methods
     */
    get text () { return $('//a[@class="btn_listing"]') }
    get fisica () { return $('//div/a[1]')}
    get lenguage () { return $('//div/a[2]')}
    get ocupacional () { return $('//div/a[3]')}
    get barraresultado () { return $('//input[@class="form-control padding-right"]')}
    get btnbuscarresultado (){ return $('//input[@value="Buscar"]') }
    get mapa (){ return $('//i[@class="icon-map-1"]') }
    get lista (){ return $('//input[@class="icon-th-list"]') }
    get validacion () { return $('//a[@class="active"]]') }
    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async buscarfisica () {
        await (await this.fisica).click();
    }

    async buscarlenguaje () {
        await (await this.lenguage).click();
    }

    async buscarocupacional () {
        await (await this.ocupacional).click();
    }


    async ingresarresultado (barraresultado){
        await(await this.barraresultado).setValue(barraresultado)
        await (await this.btnbuscarresultado).click();
    }

    async clickmapa () {
        await (await this.mapa).click();
    }

    async clicklista () {
        await (await this.lista).click();
    }

    
    
     openresult () {
        return browser.url(`/#/search`);
    }
}

module.exports = new ResultsPage();
