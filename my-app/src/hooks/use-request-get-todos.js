import { useState, useEffect } from 'react'

export const useRequestGetTodos = (refreshTodos, setTodosServer) => {
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		fetch('http://localhost:8204/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodo) => {
				setTodosServer(loadedTodo)
			})
			.finally(() => setIsLoading(false))
	}, [refreshTodos, setTodosServer])

	return {
		isLoading: isLoading,
	}
}
