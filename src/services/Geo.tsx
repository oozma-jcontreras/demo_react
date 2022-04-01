import axios from 'axios';
import { conseguirToken } from './Seguridad';
import Token from '../interfaces/oauth/Token';

const listarRegiones = async () => {
    conseguirToken()
        .then((response) => {
            axios.get('https://xxx.cl/catalogos/v1/regiones', {
                headers: {
                    Authorization: "Bearer " + response.data.access_token
                },
                withCredentials: true
            });
            /*
            axios.request({
                url: "/catalogos/v1/regiones",
                method: "get",
                baseURL: "https://api-uat.cajalosandes.cl",
                headers: {
                    Authorization: "Bearer " + response.data.access_token
                },
                withCredentials: true
            });
            */
        })
        .catch((error) => {
            console.log(error);
            return null;
        });
}
export { listarRegiones }