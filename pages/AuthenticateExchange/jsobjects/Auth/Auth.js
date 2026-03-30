export default {
	isNonEmptyString(value) {
		return typeof value === 'string' && value.trim().length > 0;
	},

	async fail(message) {
		console.warn(message)
		await showAlert(message)
		if (appsmith.mode === "VIEW") {
			return navigateTo("Authentication", {}, "SAME_WINDOW")
		}
	},

	unquote(str) {
		if (str.startsWith('"') && str.endsWith('"')) {
			return str.slice(1, -1)
		}
		return str
	},

	async onLoad () {
		const code = appsmith.URL.queryParams?.code;
		if (!Auth.isNonEmptyString(code)) {
			await Auth.fail("No code provided in query params");
			return;
		}

		let verifier = appsmith.store['sb-umawafpwexelguurmcna-auth-token-code-verifier']
		if (!Auth.isNonEmptyString(verifier)) {
			await Auth.fail("No code verifier found in local storage.")
			return;
		}
		verifier = Auth.unquote(verifier);
		if (!Auth.isNonEmptyString(verifier)) {
			await Auth.fail("No code verifier found in local storage.")
			return;
		}

		const response = await CodeExchange.run({ code, verifier });
		return response;
	}
}