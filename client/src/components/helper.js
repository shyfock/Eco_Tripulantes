import { isUndefined } from 'util'
import Cookies from 'universal-cookie'
import axios from 'axios';
import { APP_HOST as host } from '../app.json'

const cookies = new Cookies()

export function calculateSessionExpiration() {
    const now = new Date().getTime();
    const newDate = now + 60 * 30 * 1000;
    return new Date(newDate);
}

export function getSession() {
    return isUndefined(cookies.get('_s')) ? false : cookies.get('_s');
}

export function getUser() {
    return cookies.get('_username');
}

function renewSession() {
    const session = getSession();
    if (!session) window.location.href = '/login';
    cookies.set('_s', session, {
        path: '/',
        expires: calculateSessionExpiration()
    })
    return session;
}

export const request = {
    get: function(services) {
        let token = renewSession();
        return axios.get(`${host}${services}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
    },
    post: function(services, data) {
        let token = renewSession();
        return axios.post(`${host}${services}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },

    put: function(services, data) {
        let token = renewSession();
        return axios.put(`${host}${services}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }
}