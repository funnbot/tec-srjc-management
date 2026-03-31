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

		const {data, error} = await Supa.client().auth.exchangeCodeForSession(code);
		
		if (error) {
			await Auth.fail("code exchange failed");
			return;	
		}
		
		navigateTo('Homepage', {}, 'SAME_WINDOW');
		//await CodeExchange.run({ code, verifier });
		//if (CodeExchange.responseMeta.statusCode)
	}
}