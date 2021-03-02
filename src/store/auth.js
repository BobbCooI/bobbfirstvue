import auth from '@/services/auth';
import jwtDecode from 'jwt-decode';

export const REGISTER = 'register';
export const LOGOUT = 'logout';
export const LOGIN = 'login';
export const ME = 'me';
export const SET_AUTH = 'set_auth';
export const CLEAR_AUTH = 'clear_auth';


const state = {
    token: null,
    payload: null,
};

const getters = {
    isAuthenticated: state => null !== state.token,
    userInfo: state => state.payload,
    token: state => state.token,
};

const mutations = {
    setUser: (state, {token, userInfo}) => {
        state.token = token;
        state.userInfo = userInfo;
    }
};

const actions = {
    register: async ({commit}, user) => {
      const {data: {token}} = await auth.i(user).catch(error => {const {message, violations} = error.response ? error.response.data : error;return Promise.reject({violations: violations || [], message});});
            const userInfo = jwtDecode(token);
            commit(SET_AUTH, {token, userInfo});
            return userInfo;
    },
    logout: ({commit}) => {
      
    },
    login: ({commit}, user) => {
        return auth.login(user).then(response => {
            const {data: {token}} = response;
            const payload = jwtDecode(token);
            console.log(`store::auth::login token payload => ${JSON.stringify(payload)}`);
            commit(SET_AUTH, {token, payload});
            return payload;
        }).catch(error => {
            const {message} = error.response ? error.response.data : error;
            return Promise.reject({message});
        });
    },
    me: ({commit}) => {
        return auth.me().then(response => {
            const {data: {token}} = response;
            const payload = jwtDecode(token);
            console.log(`store::auth::me token payload => ${JSON.stringify(payload)}`);
            commit(SET_AUTH, {token, payload});
            return payload;
        }).catch(error => {
            const {message} = error.response ? error.response.data : error;
            return Promise.reject({message});
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};