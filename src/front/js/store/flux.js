const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: {},
			email_test: "persefone@gmail",
			base_url: "https://3001-gray-slug-nautwk8k.ws-eu08.gitpod.io/"
		},
		actions: {
			getUser: () => {
				fetch(getStore().base_url.concat("api/user/", getStore().email_test))
					.then(function(response) {
						if (!response.ok) {
							throw Error("I can't load User!");
						}
						return response.json();
						console.log(response);
					})
					.then(function(responseAsJson) {
						setStore({ user: responseAsJson });
					})
					.catch(function(error) {
						console.log("Looks like there was a problem: \n", error);
					});
			}
		}
	};
};

export default getState;
