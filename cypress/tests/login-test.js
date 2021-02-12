import { loginPage } from "../pages/login.page";
import * as config from "../app-config.json"

describe('Login page', () => {
	beforeEach('Login Page tests', () => {
		cy.clearCookies() // Очистка cookie
	})

	it('Login action using otp', () => {
		cy.visit('/') // Переход на страницу логина приложения
		cy.get('[id="loginEdit-el"]').type(config.UserName) // Ввод логина пользователя
		cy.get('[id="passwordEdit-el"]').type(config.UserPassword) // Ввод пароля пользователя
		loginPage.generateOtpPassword() // Генерируем OTP код авторизации
		cy.task('generateOTP').then(token => {
			cy.get('[id="totpCodeEdit-el"]').type(token);
		}) // Ввод OTP токена авторизации
		cy.get('[data-item-marker="btnLogin"]').click() // Нажимаем кнопку логина
		cy.url().should('include', '/Nui/ViewModule.aspx') // Проверяем что мы вошли в приложение
	})
})
