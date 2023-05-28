import axiosInstance from "../../axiosInstance/axiosInstance"

 export default  function changeMovies(){
    return (dispatch)=>{
        return axiosInstance.get('/movie/popular').then((res)=>{
            console.log(res.data.results);
            dispatch({type:"SET_MOVIES",payload:res.data.results})
        }).catch((err)=>{console.log(err);})
    }
 }
