export const initialTodosState = {
  todo: '',
  todosServer: [],
  refreshTodos: false,
  editId: false,
  completed: false,
}

export const todosReducer = (state = initialTodosState, action) => {
	switch (action.type) {

    case 'SET_EDIT_ID_ACTION_CREATOR': {
      return {
        ...state,
        editId: action.payload,
      }
    }

    case 'SET_REFRESH_TODOS_ACTION_CREATOR': {
      return {
        ...state,
        refreshTodos: action.payload,
      }
    }

    case 'SET_TODO_ACTION_CREATOR': {
      return {
        ...state,
        todo: action.payload,
      }
    }

    case 'SET_TODOS_SERVER_ACTION_CREATOR': {
      return {
        ...state,
        todosServer: action.payload,
      }
    }

    case 'TOGGLE_COMPLETED_HANDLER_ACTION_CREATOR': {
      return {
        ...state,
        completed: action.payload,
      }
    }

		default:
			return state
  }
}
