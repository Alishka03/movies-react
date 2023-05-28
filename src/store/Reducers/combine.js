import { combineReducers } from "redux";
import moviesReducer from "./movies";
import moviesFavReducer from "./moviesFav";
import loaderReducer from "./loader_reducer";
import searchReducer from "./search_reducer";

export default combineReducers({
    moviesFav: moviesFavReducer,
    movies: moviesReducer,
    loader: loaderReducer,
    valueOfSearch: searchReducer
})
