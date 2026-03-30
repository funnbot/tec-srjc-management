export default {
	SUPABASE_URL: "https://umawafpwexelguurmcna.supabase.co",
	SUPABASE_PUBLISHABLE_KEY: "sb_publishable_TyOoXxO9vjcqhVm6ZRGPvg_XRFn-DwX",

	AppsmithStore: {
		getItem: async (key) => {
			console.log("Get: ", key)
			return appsmith.store[key]
		},
		removeItem: async (key) =>  {
			console.log("Remove: ", key)
			return removeValue(key);
		},
		setItem: async (key, value) => {
			console.log("Set: ", key, " = ", value)
			return storeValue(key, value, true)
		}
	},

	client: () => {
		if (globalThis.supa === undefined) {
			globalThis.supa = supabase.createClient(Supa.SUPABASE_URL, Supa.SUPABASE_PUBLISHABLE_KEY, {
				auth: {
					debug: true,
					flowType: 'pkce',
					storage: Supa.AppsmithStore
				}
			})
		}
		return globalThis.supa
	}
	
	
}
