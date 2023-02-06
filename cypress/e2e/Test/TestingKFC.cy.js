/// <reference types="cypress" />
require('cypress-plugin-tab')

require('cypress-xpath')

describe('empty spec', () => {

  
  it('passes', () => {
   /// cy.visit('https://www.kfc.co/')
  
})
Cypress.on('uncaught:exception', (err, runnable)=>{
  return false
}) 



Cypress.on('assertion:exception', (err, runnable) => {

  return false
})

Cypress. on('uncaught:exception', (err, runnable) => { return false; }); 

"defaultCommandTimeout: 100000"



let t = 1000;
let next = 50000;

 
  it ("Test ==> ", () =>{
    
   


      cy.visit('https://www.kfc.co/')
      cy.wait(1000)
      cy.get('[data-rs-event-name="Select Menu"] > a > span').click()
      cy.wait(1000)
      cy.get('#product_81 > .card > .h-100 > .card-body > .mt-auto').click()
      cy.wait(1000)
      cy.clearCookies()
      cy.get('[data-max="3"][data-modifier-type="related-product"] > .group-divider > .modal-relation-product > .d-flex > .quantity-select-related-product-increase').click()
      cy.wait(1000)
      cy.get('[data-id="86"] > .d-flex > .quantity-select-related-product-increase').click()
      cy.wait(1000)
      cy.get('[data-id="179"] > .d-flex > .quantity-select-related-product-increase').click().click()
      cy.wait(1000)
      cy.get('#options_additional_information').type('TypeError - Joel Baigorri')
      cy.wait(1000)
      cy.get('#options_additional_information').clear()
      cy.wait(1000)
      cy.get('#options_additional_information').type('Joel Baigorri')
      cy.wait(1000)
      cy.get('#add-to-cart-button').click()
      cy.wait(1000)
      cy.clearCookies()
      cy.get('#button-checkout-duna').click()
      cy.wait(50000)
      ////Info de cuenta
      cy.xpath('//*[@id="__JSBridgeIframe_1.0__"]')
      .its('0.contentDocument.body')

      /*cy.get('form[data-test="email-form"]')
      .find('input[name="email"]')
      .type('joel@deuna.com');*/

   // cy.get('form[data-test="email-form"]').submit();

      /*cy.get('input[type="email"]')
      .type('joel@deuna.com');*/

      //cy.get('[id="email1229d086-798c-472e-cac5-bd091b7202ca"]').type('joel@deuna.com');
  
      cy.get('[name="email"]').type('joel@deuna.com');
      cy.get('[name="first_name"]').type('joel');
      cy.get('[name="last_name"]').type('Baigorri');
      cy.get('[name="phone"]').type('11111111');
      cy.get('[name="cedula"]').type('12124578');
      cy.get('[name="address"]').type('Santa Fé, Montería, Córdoba, Colombia');
  
      cy.get('[type="submit"]').click();

     /* cy.get('[data-testid="Correo Electronico*-input"]').type('joel@deuna.com')
      cy.get('[data-testid="name-input"]').type('joel')
      cy.get('[data-testid="last-name-input"]').type('Baigorri')
      cy.get('[data-testid="phone-input"]').type('11111111')
      cy.get('[data-testid="identification-input"]').type('12124578')
      cy.get('[data-testid="address-input"]').type('Santa Fé, Montería, Córdoba, Colombia')
  
      cy.get('[data-testid="confirm-button"]').click()*/
      //.contains('email5a74b469-ba65-48a6-a081-c06cd14340f7').click({forced:true}).type('joel@deuna.com')
      //cy.get('input:first').type('joel@deuna.com')
     // .contains('Correo Electrónico*').click({forced:true})
      ////*[@id="4592427071_mtk6nde6mtk"]
      //cy.get('#__next > div > div.css-c9cbdv.e1go1j6j0 > div.css-18g2srw.e1go1j6j0 > div.emsfo8i0.css-141399e.e1go1j6j0 > div:nth-child(3) > div:nth-child(1) > div.FormBuilder > div > div.css-18j3qbb.ezsedcu1 > div > div > div.e1hplhw31.css-11c12j6.e1go1j6j0 > div.css-idw4nv.e12840xn1').type('joel@deuna.com')
     // cy.xpath('//*[@id="__next"]/div/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div/div[1]/div/div/div[1]').click({forced:true}).type('joel@deuna.com')
     /*const inframe =
      cy.get('#dUnaCheckoutWidget__modal')
      .its('0.contentDocument.body')
      //.should('contain', 'dashboard')
      //.should('contain.text', 'You don’t have any saved items.')
      //.should('be.visible')
      //.then(cy.wrap);
       inframe.get('#email6c933bd4-1392-4bcd-e7d1-045c12e37c7b').type('joel@test.com')
      //const inframe =
      /*cy.get('#4592427071_mtk6nde6mtk')
      .its('0.contentDocument.body')
      .find('#email6c933bd4-1392-4bcd-e7d1-045c12e37c7b').type('joel@test.com')*/

     /* const inframe =
      cy.get('#4592427071_mtk6nde6mtk')
      .its('0.contentDocument.body')
      .should('be.visible')
      .then(cy.wrap);
      
      inframe.get('#email6c933bd4-1392-4bcd-e7d1-045c12e37c7b').type('joel@test.com')*/

          
     /* const inframe =
      cy.get('#4592427071_mtk6nde6mtk')
      .its('0.contentDocument.body')
      //.should('be.visible')
      .then(cy.wrap).find('#email6c933bd4-1392-4bcd-e7d1-045c12e37c7b').should('be.visible').type('joel@test.com')
      //inframe.get('#email6c933bd4-1392-4bcd-e7d1-045c12e37c7b').type('joel@test.com')*/

     // .pause(6000)
     // cy.get('#email6c933bd4-1392-4bcd-e7d1-045c12e37c7b').type('asa')*/
      //cy.xpath('//*[@id="app"]/div/main/section/div/div/div/div[4]/div/div/iframe').its('0.contentDocument.body').contains('Seleccionar').click({force:true})
//*[@id="4592427071_mtk6nde6mtk"]
      ///cy.get('#email6c933bd4-1392-4bcd-e7d1-045c12e37c7b', { timeout: 15000 }).should('be.visible').type('xxx')
     

      ///cy.clearCookies()
      

    
    
  })

  
})