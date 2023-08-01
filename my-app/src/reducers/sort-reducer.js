export const initialSortState = {
  sortTitle: false,
}

export const sortReducer = (state = initialSortState, action) => {
	switch (action.type) {

    case 'SORT_HANDLER_ACTION_CREATOR': {
      return {
        ...state,
        sortTitle: action.payload,
      }
    }

		default:
			return state
  }
}
