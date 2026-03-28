export default {
	SUPABASE_URL: "https://umawafpwexelguurmcna.supabase.co",
	SUPABASE_PUBLISHABLE_KEY: "sb_publishable_TyOoXxO9vjcqhVm6ZRGPvg_XRFn-DwX",

	defaultTab: 'Sign In',

	setDefaultTab: (newTab) => {
		this.defaultTab = newTab;
	},

	generatePasswordHash: async () => {
		return dcodeIO.bcrypt.hashSync(inp_registerPassword.text, 10);
	},

	verifyHash: async (password, hash) => {
		return dcodeIO.bcrypt.compareSync(password, hash)
	},

	createToken: async (user) => {
		return jsonwebtoken.sign(user, 'secret', {expiresIn: 60*60});
	},

	signIn: async () => {
		const supa = supabase.createClient(functions.SUPABASE_URL, functions.SUPABASE_PUBLISHABLE_KEY);
		const { data, error } = await supa.auth.signInWithOAuth({
			provider: "google",
			options: {
				//redirectTo: 'https://umawafpwexelguurmcna.supabase.co/auth/v1/callback',
				skipBrowserRedirect: true,
			},
		})
		console.log(data)
		// console.log(error)
		if (data.url) {
			navigateTo(data.url, {}, 'NEW_WINDOW') // use the redirect API for your server framework
		}
		// const password = inp_password.text;
		// 
		// const [user] = await findUserByEmail.run();
		// 
		// if (user && this.verifyHash(password, user?.password_hash)) {
		// storeValue('token', await this.createToken(user))
		// .then(() => updateLogin.run({
		// id: user.id
		// }))
		// .then(() => showAlert('Register Success', 'success'))
		// } else {
		// return showAlert('Invalid emaill/password combination', 'error');
		// }
	},

	register: async () => {
		// const passwordHash = await this.generatePasswordHash();
		// const [user] = await createUser.run({passwordHash});
		// if (user) {
		// storeValue('token', await this.createToken(user))
		// showAlert('Register Success', 'success');
		// } else {
		// return showAlert('Error creating new user', 'error');
		// }
	},
}