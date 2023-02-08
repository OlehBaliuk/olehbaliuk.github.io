import axios from 'axios';

export default class HttpService {
    constructor() {
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_BASE_URL,
        });

        this.instance.interceptors.request.use(
            config => this.requestHandler(config),
            error => {
                return Promise.reject(error);
            },
        );

        this.instance.interceptors.response.use(
            response => this.responseHandler(response),
            error => this.errorHandler(error),
        );
    }

    requestHandler = config => {
        config.params = {
            ...config.params,
        };

        return config;
    };

    responseHandler = response => {
        return response;
    };

    errorHandler = error => {
        if (error.response) {
            return error.response.data;
        } else {
            return Promise.reject(error);
        }
    };

    get(url, params) {
        return this.instance({ method: 'get', url, params });
    }
}
