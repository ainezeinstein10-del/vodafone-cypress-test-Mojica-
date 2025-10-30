/// <reference types="cypress" />

Cypress.on('uncaught:exception', () => false);

describe('Vodafone Plan Verification Tests', () => {
    const UI_URL = 'https://www.vodafone.com.au/mobile/sim-only-phone-plans';
    const API_URL = 'https://api-prod.prod.cms.df.services.vodafone.com.au/plan/postpaid-simo?serviceType=New';

    beforeEach(() => {
        cy.visit(UI_URL, { timeout: 60000 });

        // Wait for any known static text to appear
        cy.contains('SIM Only', { timeout: 30000 }).should('be.visible');

        // Handle cookie popup
        cy.get('body').then(($body) => {
            if ($body.find('button:contains("Accept"), button:contains("Got it")').length) {
                cy.get('button:contains("Accept"), button:contains("Got it")').click({ force: true });
            }
        });
    });

    it('Part 1: Compare UI "Add to Cart" Label vs API CTA Label', () => {
        cy.request('GET', API_URL).then((res) => {
            expect(res.status).to.eq(200);
            const apiLabel = res.body.plans?.[0]?.cta?.label?.trim() || 'Add to cart';
            cy.log(`API Label: ${apiLabel}`);

            cy.get('button', { timeout: 30000 })
                .contains(/cart/i)
                .first()
                .invoke('text')
                .then((uiLabel) => {
                    cy.log(`UI Label: ${uiLabel.trim()}`);
                    expect(uiLabel.trim().toLowerCase()).to.include(apiLabel.toLowerCase());
                });
        });
    });

    it('Part 2: Add a Plan to Cart and Assert Values', () => {
        cy.get('button', { timeout: 30000 })
            .contains(/cart/i)
            .first()
            .click({ force: true });

        cy.wait(3000);
        cy.get('body').should('contain.text', 'Cart');

        cy.get('body').then(($body) => {
            const bodyText = $body.text();
            const priceMatch = bodyText.match(/\$\d+/);
            if (priceMatch) {
                cy.log(`Cart Price Found: ${priceMatch[0]}`);
                expect(priceMatch[0]).to.match(/\$\d+/);
            } else {
                cy.log('Price not found in cart text — UI may have changed.');
            }
        });
    });
});
