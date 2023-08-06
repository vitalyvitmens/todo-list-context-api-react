const initialStatusState = {
	loading: false,
	isCreating: false,
	isUpdating: false,
	isDeleting: false,
}

export const statusReducer = (
	state = initialStatusState,
	{ type, payload }
) => {
	switch (type) {
    case 'SET_LOADING_ACTION_CREATOR': {
      return {
        ...state,
        loading: payload,
      }
    }

		// case 'SET_IS_CREATING_ACTION_CREATOR': {
		// 	return {
		// 		...state,
		// 		isCreating: payload,
		// 	}
		// }

		// case 'SET_IS_DELETING_ACTION_CREATOR': {
		// 	return {
		// 		...state,
		// 		isDeleting: payload,
		// 	}
		// }

		// case 'SET_IS_UPDATING_ACTION_CREATOR': {
		// 	return {
		// 		...state,
		// 		isUpdating: payload,
		// 	}
		// }

		default:
			return state
	}
}
