const InitialState = {
    valueOfSearch: ''
}


export default function searchReducer(state = InitialState, action) {
    switch (action.type) {
        case 'SET_SEARCH':
            return {...state, valueOfSearch: action.payload}
        default:
            return state
    }

}
