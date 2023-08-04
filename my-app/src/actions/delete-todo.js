import { fetchTodosDataMock } from '../utils'

// export const deleteTodoAsync = (todoId) => async (dispatch) => {
// 		await fetchTodosDataMock('DELETE', { id: todoId })
//     dispatch({ type: 'DELETE_TODO_ASYNC', payload: todoId })
// 	}
export const deleteTodoAsync =
	(todoId = 8) =>
	async (dispatch) => {
		await fetchTodosDataMock('DELETE', { id: todoId })
		dispatch({ type: 'DELETE_TODO_ASYNC', payload: todoId })
	}
