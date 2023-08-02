import { fetchTodosDataMock } from '../utils'

export const getTodosAsync = async (dispatch) => {
	const todos = await fetchTodosDataMock('GET')
	dispatch({
		type: 'GET_TODOS_ASYNC',
		payload: todos,
	})
}
