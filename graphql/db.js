import fetch from 'node-fetch'
import { API_KEY } from '../config/key'

const API_KEY = 'https://api.nexon.co.kr/kart/v1.0/user/nickname/'

export const getUserId = (usrName) => {
    let REQUEST_URL = API_URL + encodeURI(usrName)
    return fetch(REQUEST_URL,{
        method:'get',
        headers: {
            'Authorization':API_KEY
        }
    })
    .then(res => res.json)
    .then(json => json)
}

