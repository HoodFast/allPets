import axios from "axios";
import {IAuthTokens, TokenRefreshRequest, applyAuthTokenInterceptor, getBrowserLocalStorage} from 'axios-jwt'

const BASE_URL = "http://127.0.0.1:8000/api/v1/"


export const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});


const requestRefresh: TokenRefreshRequest = async (refreshToken: string): Promise<IAuthTokens | string> => {
    console.log(refreshToken)
    const response = await axios.post(`${BASE_URL}token/refresh/`, {token: refreshToken})

    return response.data.access
}

const getStorage = getBrowserLocalStorage
applyAuthTokenInterceptor(instance, {requestRefresh,getStorage})