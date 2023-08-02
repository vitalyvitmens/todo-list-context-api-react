import { fetchTodosDataMock } from '../utils'

export const toggleCompletedTodoAsync = (id) => {
	return async (dispatch) => {
		const newTodo = await fetchTodosDataMock('PATCH', {
      id: id,
      completed: true ? false : true,
    })
    dispatch({ type: 'TOGGLE_COMPLETED_TODO_ASYNC', payload: newTodo })
	}
}
