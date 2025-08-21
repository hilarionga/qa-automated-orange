describe("test suite - Orange Login test", ()=>{
    
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com")
    })
    it ("validar login", ()=>{
        //cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.get('.orangehrm-login-branding > img').should("be.visible")

        //cy.get('[name="username"]')
       

    })
    it ('Validacion campo username existe', function (){
        cy.get('#txtUsername').should('be.visible')
    })

    it ('Validacion del texto del footer', function (){
        //cy.get('#footer').contains('OrangeHRM')
        cy.get('.orangehrm-copyright-wrapper > :nth-child(2)').contains('OrangeHRM')
    })

    

    it('validacion boton login', ()=>{
        cy.get('.oxd-button').should("be.visible")
    })
    

});