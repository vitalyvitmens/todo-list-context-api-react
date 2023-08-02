import {
	legacy_createStore as createStore,
	combineReducers,
	applyMiddleware,
	compose,
} from 'redux'
import {
	searchReducer,
	sortReducer,
	statusReducer,
	todosReducer,
} from './reducers'
import thunk from 'redux-thunk'

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
