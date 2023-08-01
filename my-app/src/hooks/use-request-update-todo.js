import { useState } from 'react'
import {useSelector} from 'react-redux'
import {selectIsUpdating, selectTodo, selectTodosServer, selectRefreshTodos } from '../selectors'

export const useRequestUpdateTodo = (
	// refreshTodos,
	// setRefreshTodos,
	// todo,
	// setTodo
) => {
  const isUpdating = useSelector(selectIsUpdating)
  const refreshTodos = useSelector(selectRefreshTodos)
  const todo = useSelector(selectTodo)
  const todosServer = useSelector(selectTodosServer)

	// const [isUpdating, setIsUpdating] = useState(false)

	const requestUpdateTodo = (id) => {
		setIsUpdating(true)

		fetch(`http://localhost:8204/todos/${id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: todo,
				completed: false,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				setTodo('')
				setRefreshTodos(!refreshTodos)
			})
			.finally(() => setIsUpdating(false))
	}

	return {
		isUpdating,
		requestUpdateTodo,
		setIsUpdating,
	}
}
