import { fetchTodosDataMock } from '../utils'

// export const toggleCompletedTodoAsync = (id) => {
// 	return async (dispatch) => {
// 		const newTodo = await fetchTodosDataMock('PATCH', {
//       id: id,
//       completed: true ? false : true,
//     })
//     dispatch({ type: 'TOGGLE_COMPLETED_TODO_ASYNC', payload: newTodo })
// 	}
// }

export const toggleCompletedTodoAsync =
	(id, newCompletedValue) => async (dispatch) => {
		const newCompleted = await fetchTodosDataMock('PATCH', {
			id: id,
			completed: newCompletedValue,
		})
		dispatch({ type: 'TOGGLE_COMPLETED_TODO_ASYNC', payload: newCompleted })
	}
