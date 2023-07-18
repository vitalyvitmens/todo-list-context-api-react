import React, { useState } from 'react'
import { TodoForm, TodoList, Loader } from './components'
import {
	useRequestAddTodo,
	useRequestDeleteTodo,
	useRequestGetTodos,
	useRequestUpdateTodo,
	useRequestToggleCompletedTodo,
} from './hooks/index'
import styles from './app.module.css'
import { AppContext } from './context'

export const App = () => {
  const [todo, setTodo] = useState('')
	const [todosServer, setTodosServer] = useState([])
  const [sortTitle, setSortTitle] = useState(false)
	const [refreshTodos, setRefreshTodos] = useState(false)
	const [search, setSearch] = useState('')
	const [completed, setCompleted] = useState(false)

	const { isLoading } = useRequestGetTodos(
		refreshTodos,
		setTodosServer,
		sortTitle
	)

	const { requestAddTodo } = useRequestAddTodo(
		refreshTodos,
		setRefreshTodos,
		todo,
		setTodo
	)

	const { requestUpdateTodo } = useRequestUpdateTodo(
		refreshTodos,
		setRefreshTodos,
		todo,
		setTodo
	)

	const { requestDeleteTodo } = useRequestDeleteTodo(
		refreshTodos,
		setRefreshTodos,
		todo
	)

	const { requestUpdateCompletedTodo } = useRequestToggleCompletedTodo(
		refreshTodos,
		setRefreshTodos,
		completed
	)

	const toggleCompletedHandler = () =>
		completed ? setCompleted(false) : setCompleted(true)

	const appData = {
    todo,
    setTodo,
		todosServer,
		refreshTodos,
		setRefreshTodos,
		search,
		setSearch,
		requestAddTodo,
		requestUpdateTodo,
		requestDeleteTodo,
		toggleCompletedHandler,
		requestUpdateCompletedTodo,
    sortTitle,
    setSortTitle,
	}

	return (
		<AppContext.Provider value={appData}>
			<div className={styles.container}>
				<TodoForm />
				{isLoading ? <Loader /> : <TodoList />}
			</div>
		</AppContext.Provider>
	)
}
