const initialSearchState = {
	search: '',
}

export const searchReducer = (
	state = initialSearchState,
	{ type, payload }
) => {
	switch (type) {
		case 'SET_SEARCH_ACTION_CREATOR': {
			return {
				...state,
				search: payload,
			}
		}

		default:
			return state
	}
}
