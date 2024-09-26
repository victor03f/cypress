describe('Cadastro Cy', () => {

    it('Cadastro com sucesso', () => {
        cy.visit('http://localhost:63342/pg-login-testes-3C/cadastro.html?_ijt=e3addkb9cdlfc9pvoisu9ii2l6');

        cy.get('usuario').type('teste');
        cy.get('email').type('teste@gmail.com');
        cy.get('#senha').type('admin');
        cy.get('#confirSenha').type('admin');
        cy.get('#entrar').click();

        cy.on('window:alert', (txt) =>{
            expect(txt).to.contains("Cadastro realizado com sucesso");
        });
    })

    it('Cadastro senhas não são iguais', () => {
        cy.visit('http://localhost:63342/pg-login-testes-3C/cadastro.html?_ijt=e3addkb9cdlfc9pvoisu9ii2l6');

        cy.get('usuario').type('teste');
        cy.get('email').type('teste@gmail.com');
        cy.get('#senha').type('admin');
        cy.get('#confirSenha').type('slamano');
        cy.get('#entrar').click();

        cy.on('window:alert', (txt) =>{
            expect(txt).to.contains("Senhas não correspondem");
        });
    })

    it('Faltam campos', () => {
        cy.visit('http://localhost:63342/pg-login-testes-3C/cadastro.html?_ijt=e3addkb9cdlfc9pvoisu9ii2l6');

        cy.get('usuario').type('teste');
        cy.get('#senha').type('admin');
        cy.get('#confirSenha').type('slamano');
        cy.get('#entrar').click();

        cy.on('window:alert', (txt) =>{
            expect(txt).to.contains("Campos faltando");
        });
    })

})