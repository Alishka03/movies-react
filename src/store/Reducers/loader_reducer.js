const InitialState = {
    loader: false
}
export default function loaderReducer(state = InitialState, action) {
    switch (action.type) {
        case 'SET_LOADER':
            return {...state, loader: action.payload}
        default:
            return state
    }

}
