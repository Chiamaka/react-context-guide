describe('ContextApp view', () => {
  before(() => {
    cy.visit('http://localhost:3002');
  });

  it('get the textbox and type', () => {
    cy.get('.input-box')
      .type('chiamaka')
      .should('have.value', 'chiamaka');
  });

  it('submit name', () => {
    cy.get('.left-panel').submit();
  });

  it('name should appear on the right', () => {
    cy.get('.right-panel').should('contain', 'chiamaka');
  });
});
