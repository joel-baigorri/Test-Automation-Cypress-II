///<reference types="Cypress"/>

describe("Titulo " , () =>{
 
    it ("Titulo", () =>{
        cy.visit('https://testing.workshop.mundomaipu.net.ar/login')
        cy.title().should('eq','WorkshopApp')
        cy.log("Title Correcto")
    })


})