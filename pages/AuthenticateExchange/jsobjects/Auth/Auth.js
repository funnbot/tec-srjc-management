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

	async onLoad () {
		const code = appsmith.URL.queryParams?.code;
		// if (!Auth.isNonEmptyString(code)) {
		// await Auth.fail("No code provided in query params");
		// return;
		// }

		const verifier = appsmith.store['sb-umawafpwexelguurmcna-auth-token-code-verifier']
		console.log(verifier)
		if (!Auth.isNonEmptyString(verifier)) {
			await Auth.fail("No code verifier found in local storage.")
			return;
		}

		const response = await CodeExchange.run({ code, verifier });
		return response;
	}
}