import { fetchTodosDataMock } from '../utils'

export const toggleCompletedTodoAsync =
	(id, newCompletedValue) => async (dispatch) => {
		const newCompleted = await fetchTodosDataMock('PATCH', {
			id: id,
			completed: newCompletedValue,
		})
		dispatch({ type: 'TOGGLE_COMPLETED_TODO_ASYNC', payload: newCompleted })
	}
