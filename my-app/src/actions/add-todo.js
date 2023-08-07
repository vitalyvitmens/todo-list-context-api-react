import { fetchTodosDataMock } from '../utils'

export const addTodoAsync = (todoTitle) => async (dispatch) => {
	const todo = await fetchTodosDataMock('POST', {
		title: todoTitle,
		completed: false,
	})
	dispatch({ type: 'ADD_TODOS_ASYNC', payload: todo })
}
