import {
	applyMiddleware,
	compose,
	legacy_createStore as createStore,
	combineReducers,
} from 'redux'
import thunk from 'redux-thunk'
import {
	todosReducer,
	searchReducer,
	sortReducer,
	statusReducer,
} from './reducers'

const reducer = combineReducers({
	todosState: todosReducer,
	statusState: statusReducer,
	searchState: searchReducer,
	sortState: sortReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk))
)
