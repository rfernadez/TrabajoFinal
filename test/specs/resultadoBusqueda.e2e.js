const ResultsPage = require('../pageobjects/resultadobusqueda.page');
const HomePage = require('../pageobjects/home.page');

describe('Resultados de las busquedas', () => {

    beforeEach (async ()=> {
        await ResultsPage.openresult();
    })

    it('cambio de URL', async () => {
        await ResultsPage.buscarfisica();
        expect(browser).toHaveUrl('https://terapeutica.digital/#/search?sp=phisical')

        await ResultsPage.buscarlenguaje();
        expect(browser).toHaveUrl('https://terapeutica.digital/#/search?sp=language')

        await ResultsPage.buscarocupacional();
        expect(browser).toHaveUrl('https://terapeutica.digital/#/search?sp=ocupational')
    });

    it('buscar especialista', async () => {
        await ResultsPage.ingresarresultado("Maria");
        await expect(ResultsPage.text).toBeDisplayed;
        
    });

    it('validar mapa', async () => {
        await ResultsPage.clickmapa;
        expect(ResultsPage.validacion).toBeDisplayed()
        await ResultsPage.clicklista;
        expect(ResultsPage.validacion).not.toBeDisplayed()
    });

});