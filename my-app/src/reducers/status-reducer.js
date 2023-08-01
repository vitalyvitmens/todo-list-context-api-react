export const initialStatusState = {
  isLoading: false,
  isCreating: false,
  isUpdating: false,
  isDeleting: false,
}

export const statusReducer = (state = initialStatusState, action) => {
	switch (action.type) {

    case 'SET_IS_CREATING_ACTION_CREATOR': {
      return {
        ...state,
        isCreating: action.payload,
      }
    }

    case 'SET_IS_DELETING_ACTION_CREATOR': {
      return {
        ...state,
        isDeleting: action.payload,
      }
    }

    case 'SET_IS_LOADING_ACTION_CREATOR': {
      return {
        ...state,
        isLoading: action.payload,
      }
    }

    case 'SET_IS_UPDATING_ACTION_CREATOR': {
      return {
        ...state,
        isUpdating: action.payload,
      }
    }

		default:
			return state
  }
}
