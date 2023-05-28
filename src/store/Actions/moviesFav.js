

export function changeMoviesFav(data){
    localStorage.setItem('moviesFav', JSON.stringify(data));
    return {
        type:"SET_MOVIESFAV",
        payload:data
    }
}
