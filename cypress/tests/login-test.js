

describe('Login page', () => {
	beforeEach('Login Page tests', () => {
		cy.clearCookies() // Очистка cookie
	})

	it('Login action using otp', () => {
		cy.visit('/') // Переход на страницу логина приложения
		cy.get('[id="loginEdit-el"]').type('a.lazarev') // Ввод логина пользователя
		cy.get('[id="passwordEdit-el"]').type('Supervisor') // Ввод пароля пользователя
		cy.task("generateOTP", "7WU5IRXQ2EPJAFNMY7XTSGKBNIQEEJ4D").then(token => {
			cy.get('[id="totpCodeEdit-el"]').type(token);
		}); // Генерируем OTP код авторизации
		cy.get('[data-item-marker="btnLogin"]').click() // Нажимаем кнопку логина
		cy.url().should('include', '/Nui/ViewModule.aspx') // Проверяем что мы вошли в приложение
	})
})
