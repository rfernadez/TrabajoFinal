const ResultsPage = require('../pageobjects/resultadobusqueda.page');
const HomePage = require('../pageobjects/home.page');
const ProfilePage = require('../pageobjects/perfil.page');

describe('Validar Perfil', () => {

    beforeEach (async ()=> {
        await ProfilePage.open();
    })

    it('ingresar perfil', async () => {
        await ProfilePage.ingresarperfil;
        expect(browser).toHaveTitle('Contacto')
        
    });
});
