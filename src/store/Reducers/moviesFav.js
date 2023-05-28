const InitialState = {
    moviesFavo: (localStorage.getItem('moviesFav') != null) ? JSON.parse(localStorage.getItem('moviesFav')) : []
}

export default function moviesFavReducer(state = InitialState, action) {
    switch (action.type) {
        case 'SET_MOVIESFAV':
            return {...state, moviesFavo: action.payload}
        default:
            return state
    }

}
