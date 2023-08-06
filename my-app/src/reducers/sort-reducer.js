const initialSortState = {
	sort: false,
}

export const sortReducer = (state = initialSortState, { type, payload }) => {
	switch (type) {
		case 'SORT_HANDLER_ACTION_CREATOR': {
			return {
				...state,
				sort: payload,
			}
		}

		default:
			return state
	}
}
