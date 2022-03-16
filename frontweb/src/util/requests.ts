import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

export const BASE_URL =  process.env.REACT_APP_BACKEND_URL ?? 'https://movieflix-devsuperior.herokuapp.com';

type LoginResponse = {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    scope: string;
    userName: string;
    userId: number;
}



const tokenKey = 'authData';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclientid';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclientsecret';


type LoginData = {
    username: string;
    password: string;
}

export const requestBackendLogin = (loginData: LoginData) => {

    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET)
    }

    const data = qs.stringify ({
        ...loginData,
        grant_type: 'password'
    });

    return axios({method: 'POST', baseURL: BASE_URL, url: '/oauth/token', data,headers});
}

export const requestBackend = (config: AxiosRequestConfig) => {
    return axios(config);
} 






export const saveAuthData = (obj : LoginResponse) => {
    localStorage.setItem(tokenKey, JSON.stringify(obj));
}

export const getAuthData = () => {
    const str = localStorage.getItem(tokenKey) ?? "{}";
    return JSON.parse(str) as LoginResponse;   
}