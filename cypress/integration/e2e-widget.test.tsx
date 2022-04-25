describe('Testing Wikipedia', () => {
    it('I can search for content', () => {
        cy.intercept('GET', '**/api/content/spaces/trabajadores-ccla/types/Testimonios/entries*', { fixture: 'modyo-response.json' }).as('modyo');
        cy.visit('http://localhost:3000');
        cy.wait('@modyo')
        cy.wait(1500);
        cy.get('[data-testid="botonLike"]').eq(0).click();
        cy.get('[data-testid="numeroLikes"]').eq(0).invoke('text').then(parseInt).should((likes) => {
            expect(likes).eq(1284);
        });
    });
});
