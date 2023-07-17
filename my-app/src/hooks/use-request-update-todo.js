export const useRequestUpdateTodo = (
	refreshTodos,
	setRefreshTodos,
	todo,
	setTodo
) => {
	const requestUpdateTodo = (id) => {
		// setIsUpdating(true)

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
			// .finally(() => setIsUpdating(false))
	}

	return {
		requestUpdateTodo,
	}
}
