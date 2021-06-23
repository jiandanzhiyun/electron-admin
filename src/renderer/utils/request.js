import axios from 'axios';

const service = axios.create({
    // process.env.NODE_ENV === 'development', //来判断是否开发环境
     headers:{'Content-Type':'application/json;charset=utf-8'},
     baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
});
service.interceptors.request.use(
    config => {
        if(localStorage.getItem('token')){
            config.headers.common['X-Token']=localStorage.getItem('token')

        }
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        if (response.code === 10) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
