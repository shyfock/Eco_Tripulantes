import { isUndefined } from 'util'
import Cookies from 'universal-cookie'
import axios from 'axios';

const cookies = new Cookies()

export function calculateSessionExpiration() {
    const now = new Date().getTime();
    const newDate = now + 60 * 30 * 1000;
    return new Date(newDate);
}

export function getSession() {
    return isUndefined(cookies.get('_s')) ? false : cookies.get('_s');
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

