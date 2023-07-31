import { ACTION_TYPE } from './actions'

export const initialState = {
	todo: '',
	todosServer: [],
	refreshTodos: false,
	editId: false,
	sortTitle: false,
	search: '',
	completed: false,
	isLoading: false,
	isCreating: false,
	isUpdating: false,
	isDeleting: false,
}

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_GAME: {
			return {
				...state,
				...payload,
			}
		}
		case ACTION_TYPE.WINNER_X: {
			return {
				...state,
				isGameEnded: true,
				winner: 'X',
			}
		}
		case ACTION_TYPE.WINNER_O: {
			return {
				...state,
				isGameEnded: true,
				winner: 'O',
			}
		}
		case ACTION_TYPE.IS_DRAW: {
			return {
				...state,
				isGameEnded: true,
				isDraw: true,
				winner: '',
			}
		}
		case ACTION_TYPE.NEW_GAME: {
			return {
				...state,
				isGameEnded: false,
				isDraw: false,
				winner: '',
				field: [
					{ value: '' },
					{ value: '' },
					{ value: '' },
					{ value: '' },
					{ value: '' },
					{ value: '' },
					{ value: '' },
					{ value: '' },
					{ value: '' },
				],
			}
		}
		default:
			return state
	}
}
