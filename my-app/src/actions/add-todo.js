import { fetchTodosDataMock } from '../utils'

export const addTodoAsync = (todoTitle) => {
	return async (dispatch) => {
		const todo = await fetchTodosDataMock('POST', { title: todoTitle })
    dispatch({
      type: 'ADD_TODOS_ASYNC',
      payload: {
        title: todo,
        completed: false,
      },
    })
	}
}
