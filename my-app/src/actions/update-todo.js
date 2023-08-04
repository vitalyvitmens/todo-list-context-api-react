import { fetchTodosDataMock } from '../utils'

// export const updateTodoAsync = (id, newTodoTitle) => {
// 	return async (dispatch) => {
// 		const newTodo = await fetchTodosDataMock('PATCH', { id: id, title: newTodoTitle })
//     dispatch({ type: 'UPDATE_TODO_ASYNC', payload: newTodo })
// 	}
// }

// export const updateTodoAsync = (todoTitle) => async (dispatch) => {
// 	const updateTodo = await fetchTodosDataMock('PATCH', { title: todoTitle })
// 	dispatch({ type: 'UPDATE_TODO_ASYNC', payload: updateTodo })
// }

export const updateTodoAsync = (id, newTodoTitle) => async (dispatch) => {
	const newTodo = await fetchTodosDataMock('PATCH', {
		id: id,
		title: newTodoTitle,
	})
	dispatch({ type: 'UPDATE_TODO_ASYNC', payload: newTodo })
}
