import {useSelector, useDispatch} from 'react-redux'
import {selectTodo, selectIsCreating, selectRefreshTodos } from '../selectors'
import { setTodoActionCreator, setIsCreatingActionCreator, setRefreshTodosActionCreator} from '../../actions'

export const useRequestAddTodo = (

) => {
  const isCreating = useSelector(selectIsCreating)
  const refreshTodos = useSelector(selectRefreshTodos)
  const todo = useSelector(selectTodo)

  const dispatch = useDispatch()

	const requestAddTodo = () => {
		if (todo !== '') {
      dispatch(setIsCreatingActionCreator(true))

			fetch('http://localhost:8204/todos', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json;charset=utf-8' },
				body: JSON.stringify({
					title: todo,
					completed: false,
				}),
			})
				.then((rawResponse) => rawResponse.json())
				.then((response) => {
          dispatch(setTodoActionCreator(''))
					dispatch(setRefreshTodosActionCreator(!refreshTodos))
				})
				.finally(() => dispatch(setIsCreatingActionCreator(false)))
		}
	}

	return {
		isCreating,
		requestAddTodo,
	}
}
