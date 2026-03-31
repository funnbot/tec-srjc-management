export default {
	async onLoad() {
		const { data, error } = await Supa.client().auth.getUser();
		if (error) {
			await showAlert("Not logged in");
			console.warn("Not logged in");
			if (appsmith.mode === "VIEW") {
				await navigateTo("Authentication", {}, "SAME_WINDOW");
			}
			return;
		}
		await showAlert("Logged in as: " + data.user.email)
	}
}