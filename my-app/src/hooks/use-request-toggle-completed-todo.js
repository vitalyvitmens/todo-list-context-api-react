import {useSelector, useDispatch} from 'react-redux'
import {selectRefreshTodos, selectCompleted } from '../selectors'
import { setRefreshTodosActionCreator} from '../../actions'

export const useRequestToggleCompletedTodo = (
) => {
  const refreshTodos = useSelector(selectRefreshTodos)
  const completed = useSelector(selectCompleted)

  const dispatch = useDispatch()

	const requestUpdateCompletedTodo = (id) => {
		fetch(`http://localhost:8204/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				completed: completed,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
        dispatch(setRefreshTodosActionCreator(!refreshTodos))
			})
	}

	return {
		requestUpdateCompletedTodo,
	}
}
