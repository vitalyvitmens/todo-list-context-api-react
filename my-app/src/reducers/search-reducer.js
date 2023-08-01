export const initialSearchState = {
  search: '',
}

export const searchReducer = (state = initialSearchState, action) => {
	switch (action.type) {

    case 'SET_SEARCH_ACTION_CREATOR': {
      return {
        ...state,
        search: action.payload,
      }
    }

		default:
			return state
  }
}
