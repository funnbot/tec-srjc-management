export default {
	googleProvider: undefined 
};

const CLIENT_ID = "667459375894-3nkhrjpsluhp2genqkr4kl45gdbbv8hb.apps.googleusercontent.com"
GoogleProvider.googleProvider = new google_oauth_gsi.GoogleOAuthProvider({
	clientId: "667459375894-3nkhrjpsluhp2genqkr4kl45gdbbv8hb.apps.googleusercontent.com",
	onScriptLoadError: () => console.log('onScriptLoadError'),
	onScriptLoadSuccess: () => console.log('onScriptLoadSuccess'),
});