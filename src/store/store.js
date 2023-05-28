import { applyMiddleware,  legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReducers from './Reducers/combine';

const store=createStore(combineReducers,composeWithDevTools(applyMiddleware(thunk)))
export default store
