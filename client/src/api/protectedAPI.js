import axios from "axios";
import { Browser as JotBrowser } from 'jwt-jot'

import store from '../redux/store';
import { onLogout } from '../redux/actions';

export default {
    // Gets all food
    getFoods: function () {
        return axiosP.get("/food");
    },
    // Gets the food item with the given id
    getFood: function (id) {
        return axiosP.get("/food/" + id);
    },
    // Deletes the food item with the given id
    deleteFood: function (id) {
        return axiosP.delete("/food/" + id);
    },
    // Saves a food item to the database
    saveFood: function (groceryData) {
        return axiosP.post("/food", groceryData);
    }
};

const axiosP = axios.create({
    baseURL: '/api/protected'
});

// https://www.npmjs.com/package/axios#interceptors
axiosP.interceptors.request.use(
    async function (config) {
        const source = axios.CancelToken.source();
        let authHeader;
        try {
            authHeader = await getAuthHeaderAsync();
        } catch (error) {
            store.dispatch(onLogout());
            source.cancel(`Request canceled: ${error}`);
            return { cancelToken: source.token };
        }

        config.headers = {
            ...config.headers,
            ...authHeader
        }

        return config;
    }
);

function getAuthHeaderAsync() {
    const jot = new JotBrowser('jwt');

    if (jot.getToken() && jot.valid()) return Promise.resolve(makeAuthHeader(jot));

    const refreshJot = new JotBrowser('refreshJwt');

    if (!refreshJot.getToken()) return Promise.reject('Refresh token not found on client.');
    if (!refreshJot.valid()) return Promise.reject('Refresh token not valid on client.');

    return axios.post("/api/auth/refresh", { token: refreshJot.getToken() })
        .then(res => res.data)
        .then(data => {
            if (data.success) {
                // save new tokens in localstorage
                new JotBrowser('refreshJwt', data.tokens.refresh);
                const jot = new JotBrowser('jwt', data.tokens.user);
                return makeAuthHeader(jot);
            } else {
                return Promise.reject(data.errors.token);
            }
        });
}

function makeAuthHeader(jot) {
    return { Authorization: 'Bearer ' + jot.getToken() };
}