export default {
	isNonEmptyString(value) {
		return typeof value === 'string' && value.trim().length > 0;
	},

	async onLoad () {
		const code = appsmith.URL.queryParams?.code;
		if (Auth.isNonEmptyString(code)) {

		} else {
			console.warn("No code provided in query params, redirecting...")
			if (appsmith.mode === "VIEW") {
				await navigateTo("Authentication", {}, "SAME_WINDOW");
			}
		}
	}
}