

describe('Login page', () => {
	it('Login action using otp', () => {
		cy.visit('http://int-web/TOTP_T_RC')

		// Вводим логин
		cy.get('[id="loginEdit-el"]').type('a.lazarev')

		// Вводим пароль
		cy.get('[id="passwordEdit-el"]').type('Supervisor')

		// Генерируем OTP код авторизации
		cy.task("generateOTP", "7WU5IRXQ2EPJAFNMY7XTSGKBNIQEEJ4D").then(token => {
			cy.get('[id="totpCodeEdit-el"]').type(token);
		});

		// Нажимаем кнопку логина
		cy.get('[data-item-marker="btnLogin"]').click()

		// Проверяем что мы вошли в приложение
		cy.url().should('include', '/Nui/ViewModule.aspx')
	})
})
