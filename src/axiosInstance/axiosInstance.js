import axios from 'axios';
import store from '../store/store';
import changeLoader from '../store/Actions/action_loader';

const axiosInstance=axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {language: 'en-US', api_key:'f4812db438d0abca8bf1cb8c723941cd'},
    // headers: {
    //     accept: 'application/json',
    //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDgxMmRiNDM4ZDBhYmNhOGJmMWNiOGM3MjM5NDFjZCIsInN1YiI6IjY0NzIyZDA2ODgxM2U0MDBlMmQ4MTUzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rjRJRJM5Kcnum3rhCBY2mFN5hiysqTxOy7DaaTnfhi0'
    // }
})

axiosInstance.interceptors.request.use((config)=>{
    store.dispatch(changeLoader(true))
    return config;
},(error)=>{
    return Promise.reject(error)
});

axiosInstance.interceptors.response.use((response)=>{
    store.dispatch(changeLoader(false))
    return response;
},(error)=>{

    return Promise.reject(error)
});
export default axiosInstance;
