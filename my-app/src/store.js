import { legacy_createStore as createStore, combineReducers } from 'redux'
import { searchReducer, sortReducer, statusReducer, todosReducer } from './reducers'

const reducer = combineReducers({
  todosState: todosReducer,
  statusState: statusReducer,
  searchState: searchReducer,
  sortState: sortReducer,
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__())
