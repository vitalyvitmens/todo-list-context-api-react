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
	const [refreshTodos, setRefreshTodos] = useState(false)
	const [editId, setEditId] = useState(false)
	const [sortTitle, setSortTitle] = useState(false)
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

	const { isUpdating, requestUpdateTodo, setIsUpdating } = useRequestUpdateTodo(
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

	const onSubmit = (e) => {
		e.preventDefault()

		if (editId) {
			const editTodo = todosServer.find((i) => i.id === editId)
			const updatedTodos = todosServer.map((t) =>
				t.id === editTodo.id
					? (t = { id: t.id, todo })
					: { id: t.id, todo: t.todo }
			)
			setTodosServer(updatedTodos)
			setEditId(0)
			setTodo('')
			return
		}

		if (todo !== '') {
			setTodosServer([{ id: `${todo}-${Date.now()}`, todo }, ...todosServer])
			setTodo('')
		}
	}

	const sortHandler = () =>
		sortTitle ? setSortTitle(false) : setSortTitle(true)

	const toggleCompletedHandler = () =>
		completed ? setCompleted(false) : setCompleted(true)

	const appData = {
		todo,
		setTodo,
		todosServer,
		setTodosServer,
		refreshTodos,
		setRefreshTodos,
		editId,
		setEditId,
		sortTitle,
		setSortTitle,
		search,
		setSearch,
		requestAddTodo,
		requestUpdateTodo,
		requestDeleteTodo,
		isUpdating,
		setIsUpdating,
		onSubmit,
		toggleCompletedHandler,
		requestUpdateCompletedTodo,
		sortHandler,
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
