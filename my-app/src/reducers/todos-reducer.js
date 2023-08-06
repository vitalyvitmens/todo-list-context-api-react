const initialTodosState = {
	todo: '',
	todosServer: [],
	refresh: false,
	edit: false,
	completed: false,
}

export const todosReducer = (state = initialTodosState, { type, payload }) => {
	switch (type) {
		case 'GET_TODOS_ASYNC': {
			return {
				...state,
				todosServer: payload,
			}
		}

		case 'ADD_TODOS_ASYNC': {
			return {
				...state,
				todosServer: [...state.todosServer, payload],
			}
		}

		case 'UPDATE_TODO_ASYNC': {
			const newTodos = state.todosServer.map((todo) => {
				if (todo.id === payload.id) {
					return payload
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
				if (todo.id === payload.id) {
					return payload
				}
				return todo
			})
			return {
				...state,
				todosServer: newCompleted,
			}
		}

		case 'DELETE_TODO_ASYNC': {
			const newTodos = state.todosServer.filter((todo) => todo.id !== payload)
			return {
				...state,
				todosServer: newTodos,
			}
		}

		case 'SET_EDIT_ACTION_CREATOR': {
			return {
				...state,
				edit: payload,
			}
		}

		case 'SET_REFRESH_ACTION_CREATOR': {
			return {
				...state,
				refresh: payload,
			}
		}

		case 'SET_TODO_ACTION_CREATOR': {
			return {
				...state,
				todo: payload,
			}
		}

		case 'SET_TODOS_SERVER_ACTION_CREATOR': {
			return {
				...state,
				todosServer: payload,
			}
		}

		default:
			return state
	}
}
