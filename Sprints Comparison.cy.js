it ('Search Test', () => {
    cy.visit('https://egyptlaptop.com/')
    cy.get(" form[name='product_form_7520003399'] i[class='ut2-icon-addchart']")
    .click({force: true})
})
