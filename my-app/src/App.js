import React, { useState } from 'react'
import { TodoForm, TodoList, TodoListSearch, Loader } from './components'
import {
	useRequestAddTodo,
	useRequestDeleteTodo,
	useRequestGetTodos,
	useRequestUpdateTodo,
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

	const { isLoadingJsonServerComponent } = useRequestGetTodos(
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
	}

	return (
		<AppContext.Provider value={appData}>
			<div className={styles.container}>
				<h2>My To-Do List</h2>
				<input
					type="text"
					value={search}
					name="search-todo"
					placeholder="Найти задачу..."
					onChange={({ target }) => setSearch(target.value)}
					className="input-field"
				/>
				<p></p>
				<TodoForm/>
				<p></p>
				<button
					className={styles.btnBrown}
					onClick={sortHandler}
					disabled={todosServer.length === 0}
				>
					{sortTitle
						? 'Отфильтровать задачи по id'
						: 'Отфильтровать задачи по алфавиту'}
				</button>
				{isLoadingJsonServerComponent ? (
					<Loader />
				) : search ? (
					<TodoListSearch />
				) : (
					<TodoList />
				)}
			</div>
		</AppContext.Provider>
	)
}
