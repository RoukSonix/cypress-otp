describe('Login page', () => {
	it('Login action using otp', () => {
		cy.visit('http://int-web/TOTP_T_RC')
		cy.get('[id="loginEdit-el"]')
			.type('a.lazarev')
			.should('have.value', 'a.lazarev')
		cy.get('[id="passwordEdit-el"]')
			.type('Supervisor')
			.should('have.value', 'Supervisor')

		cy.task("generateOTP", "7WU5IRXQ2EPJAFNMY7XTSGKBNIQEEJ4D").then(token => {
			cy.get('[id="totpCodeEdit-el"]').type(token);
		});

		cy.get('[data-item-marker="btnLogin"]').click()
		cy.url().should('include', '/Nui/ViewModule.aspx')
	})
})
