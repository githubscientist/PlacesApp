import instance from "./instance";

// define the authentication service
const authService = {
    signup: async (user) => {
        try {
            console.log('registering user...');
            const res = await instance.authInstance.post('/users/signup', user);

            console.log('user registered...');

            // store the token in local storage
            localStorage.setItem('token', JSON.stringify(res.data.token));

            return res.data;
        } catch (err) {
            console.log('error registering user...', err);
            return err.response.data;
        }
    },

    login: async (user) => {
        try {
            console.log('logging in user...');
            const res = await instance.authInstance.post('/users/login', user);

            console.log('user logged in...');

            // store the token in local storage
            localStorage.setItem('token', JSON.stringify(res.data.token));

            // store the user in local storage
            localStorage.setItem('user', JSON.stringify(res.data.user));

        } catch (err) {
            console.log('error logging in user...', err);
            return err.response.data;
        }
    }
}

// export the authentication service
export default authService;