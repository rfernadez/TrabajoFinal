const HomePage = require('../pageobjects/home.page');
const ResultsPage = require('../pageobjects/resultadobusqueda.page');

describe('Metodos de busqueda', () => {

    beforeEach (async ()=> {
        await HomePage.open();
    })

    it('should not search', async () => {
        await HomePage.buscar();
        await expect(await HomePage.title).toBeDisplayed();
        
    });

    it('cambio del placeholder', async () => {
        await HomePage.especialidad();
        await expect(HomePage.focus).toBeFocused
        await expect(HomePage.searchinput).toBeDisplayed;
        
    });

    it('buscar nombre', async () => {
        await HomePage.ingresarinfo("Maria");
        await expect(ResultsPage.text).toBeDisplayed;
        
    });
});


