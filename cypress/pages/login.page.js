import * as config from "../app-config.json"

export class LoginPage {

	/*
	Генерация токена авторизации 2FA Google аутентификатора
	 */
	generateOtpPassword = function generateOtpPassword () {
		cy.task("generateOTP", config.OTPToken)
	};

	/*
	Проверка статуса загрузки страницы
	 */
	pageLoaded = function () {
		cy.url().should('include', '/Nui/ViewModule.aspx')
		cy.get('#leftPanel')
		cy.get('#centerPanelContainer')
		cy.contains('System designer')
		cy.contains('Profile')
	};

	loginField = '[id="loginEdit-el"]';
	passwordField = '[id="passwordEdit-el"]';
	otpField = '[id="totpCodeEdit-el"]';
	loginButton = '[data-item-marker="btnLogin"]';

}

export const loginPage = new LoginPage()