describe('Sprints Test', () => {
  it('Add to Cart', () => {
    cy.visit('https://egyptlaptop.com/')
    cy.contains('Epson L1300 Eco Tank Printer')
   .click()
    cy.get('#button_cart_3399 > span')
    .click()
    cy.wait(5000)
    cy.get('#cart_icon_4700')
    .click({force: true})
    cy.get('.cm-cart-buttons')
  
    .click()
  })
})