import { fetchTodosDataMock } from '../utils'

export const updateTodoAsync = (id, newTodoTitle) => async (dispatch) => {
	const newTodo = await fetchTodosDataMock('PATCH', {
		id: id,
		title: newTodoTitle,
	})
	dispatch({ type: 'UPDATE_TODO_ASYNC', payload: newTodo })
}
