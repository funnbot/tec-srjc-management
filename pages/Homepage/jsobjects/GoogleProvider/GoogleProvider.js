export default {
	notFun: () => {},
	googleProvider: new google_oauth_gsi.GoogleOAuthProvider({
		clientId: "667459375894-3nkhrjpsluhp2genqkr4kl45gdbbv8hb.apps.googleusercontent.com",
		onScriptLoadError: () => console.log('onScriptLoadError'),
		onScriptLoadSuccess: () => console.log('onScriptLoadSuccess'),
	})
}