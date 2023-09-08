import axios from 'axios';

let URL;

switch (import.meta.env.REACT_APP_ENVIRONMENT) {
    case "DEVELOPMENT":
        URL = "http://localhost:5000/";
        break;
    case "PRODUCTION":
        URL = "Our Backend deploy link";
        break;
    default:
        URL = "http://localhost:5000/";
}

const instance = axios.create({
    baseURL: URL
})

export default instance;