
const InitialState = {
    movies:[]
}

export default function moviesReducer(state = InitialState, action) {
    switch (action.type){
        case 'SET_MOVIES':
            return { ...state, movies: action.payload}
            default:
                return state
    }

}
