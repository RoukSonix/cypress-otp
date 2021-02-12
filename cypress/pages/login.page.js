import * as config from "../app-config.json"

export class LoginPage {

	generateOtpPassword = function generateOtpPassword () {
		cy.task("generateOTP", config.OTPToken)
	}

}

export const loginPage = new LoginPage()