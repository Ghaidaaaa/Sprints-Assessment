it ('Search Test', () => {
cy.visit('https://egyptlaptop.com/')
cy.get('#search_input')
.click()
.type('Asus{enter}')
})