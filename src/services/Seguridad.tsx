import axios from 'axios';
import qs from 'qs';

const conseguirToken = () => {
    const data: any = qs.stringify({
        'grant_type': 'password',
        'username': 'xxxx',
        'password': 'xxxx'
    });
    const config: any = {
        method: 'post',
        url: 'https://xxx.cl/oauth2/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'x-api-key': '',
            'Authorization': 'Basic xxx'
        },
        data: data
    };
    return axios(config);
}

export { conseguirToken }