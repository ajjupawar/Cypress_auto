describe('Launches the urls', () => {
  it('TestCase01', () => {
    cy.visit('https://www.google.com')
    cy.log("Launched url1")    
  })
  it('TestCase02', () => {
    cy.visit('https://www.google.com')
    cy.log("Launched url2") 
  })
  it('TestCase03', () => {
    cy.visit('https://www.facebook.com/')
    cy.log("Launched url3") 
  })
  it('TestCase04', () => {
    cy.visit('https://www.google.com')
    cy.log("Launched url4") 
  })


})