export const initialTodosState = {
	todo: '',
	todosServer: [],
	refreshTodos: false,
	editId: false,
	completed: false,
}

export const todosReducer = (state = initialTodosState, action) => {
	switch (action.type) {
		case 'GET_TODOS_ASYNC': {
			return {
				...state,
				todosServer: action.payload,
			}
		}

		case 'ADD_TODOS_ASYNC': {
			return {
				...state,
				todosServer: [...state.todosServer, action.payload],
			}
		}

		case 'UPDATE_TODO_ASYNC': {
			const newTodos = state.todosServer.map((todo) => {
				if (todo.id === action.payload.id) {
					return action.payload
				}
				return todo
			})
			return {
				...state,
				todosServer: newTodos,
			}
		}

		case 'TOGGLE_COMPLETED_TODO_ASYNC': {
			const newCompleted = state.todosServer.map((todo) => {
				if (todo.id === action.payload.id) {
					return action.payload
				}
				return todo
			})
			return {
				...state,
				todosServer: newCompleted,
			}
		}

		case 'DELETE_TODO_ASYNC': {
			const newTodos = state.todosServer.filter(
				(todo) => todo.id !== action.payload
			)
			return {
				...state,
				todosServer: newTodos,
			}
		}

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
				todosServer: [...state.todosServer, action.payload],
			}
		}

		default:
			return state
	}
}
