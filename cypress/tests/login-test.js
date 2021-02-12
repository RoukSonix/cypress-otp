import { loginPage } from "../pages/login.page";
import * as config from "../app-config.json"

describe('Login page', () => {
	beforeEach('Login Page tests', () => {
		cy.clearCookies() // Очистка cookie
	})

	it('Login action using otp', () => {
		cy.visit('/') // Переход на страницу логина приложения
		cy.get(loginPage.loginField).type(config.UserName) // Ввод логина пользователя
		cy.get(loginPage.passwordField).type(config.UserPassword) // Ввод пароля пользователя
		loginPage.generateOtpPassword() // Генерируем OTP код авторизации
		cy.task('generateOTP').then(token => {
			cy.get(loginPage.otpField).type(token);
		}) // Ввод OTP токена авторизации
		cy.get(loginPage.loginButton).click() // Нажимаем кнопку логина
		loginPage.pageLoaded() // Проверяем что мы вошли в приложение
	})
})
