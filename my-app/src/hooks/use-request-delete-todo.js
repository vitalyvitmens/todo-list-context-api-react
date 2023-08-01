import {useSelector, useDispatch} from 'react-redux'
import {selectRefreshTodos, selectIsDeleting } from '../selectors'
import { setRefreshTodosActionCreator, setIsDeletingActionCreator} from '../../actions'

export const useRequestDeleteTodo = (
  ) => {
  const refreshTodos = useSelector(selectRefreshTodos)
  const isDeleting = useSelector(selectIsDeleting)

  const dispatch = useDispatch()

	const requestDeleteTodo = (id) => {
		dispatch(setIsDeletingActionCreator(true))

		fetch(`http://localhost:8204/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				dispatch(setRefreshTodosActionCreator(!refreshTodos))
			})
			.finally(() => dispatch(setIsDeletingActionCreator(false)))
	}

	return {
		isDeleting,
		requestDeleteTodo,
	}
}
