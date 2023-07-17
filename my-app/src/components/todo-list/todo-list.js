import { useState, useContext } from 'react'
import { AppContext } from '../../context'
import styles from './todo-list.module.css'

export const TodoList = () => {
	const {
		todosServer,
		setTodosServer,
		requestUpdateTodo,
		requestDeleteTodo,
		todo,
		setTodo,
		search,
		toggleCompletedHandler,
		requestUpdateCompletedTodo,
		sortTitle,
		setSortTitle,
	} = useContext(AppContext)

	const [isUpdating, setIsUpdating] = useState(false)
	const [editId, setEditId] = useState(false)

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

	return (
		<>
			<button
				className={styles.btnBrown}
				onClick={sortHandler}
				disabled={todosServer.length === 0}
			>
				{sortTitle
					? 'Отфильтровать задачи по id'
					: 'Отфильтровать задачи по алфавиту'}
			</button>
			{sortTitle
				? todosServer
						.filter((todo) => {
							return search ? todo.title.includes(search) : todo
						})
						.sort((a, b) => (a['title'] > b['title'] ? 1 : -1))
						.map(({ id, title, completed }) => (
							<ol key={id}>
								<span>{id}</span>
								<div
									className={completed ? styles.todoLineThrough : styles.todo}
									onClick={() => {
										toggleCompletedHandler()
										requestUpdateCompletedTodo(id)
									}}
								>
									{title}
								</div>
								<button
									className={
										!todo ? styles.updateBtnYellow : styles.updateBtnGreen
									}
									onClick={() => {
										if (todo === '') {
											setIsUpdating(true)
											setTodo(title)
										} else {
											requestUpdateTodo(id)
											setTodo('')
										}
									}}
								>
									✎
								</button>
								<button
									className={styles.deleteBtn}
									onClick={() => requestDeleteTodo(id)}
								>
									X
								</button>
							</ol>
						))
				: todosServer
						.filter((todo) => {
							return search ? todo.title.includes(search) : todo
						})
						.map(({ id, title, completed }) => (
							<ol key={id}>
								<span>{id}</span>
								<div
									className={completed ? styles.todoLineThrough : styles.todo}
									onClick={() => {
										toggleCompletedHandler()
										requestUpdateCompletedTodo(id)
									}}
								>
									{title}
								</div>
								<button
									className={
										!todo ? styles.updateBtnYellow : styles.updateBtnGreen
									}
									onClick={() => {
										if (todo === '') {
											setIsUpdating(true)
											setTodo(title)
										} else {
											requestUpdateTodo(id)
											setTodo('')
										}
									}}
								>
									✎
								</button>
								<button
									className={styles.deleteBtn}
									onClick={() => requestDeleteTodo(id)}
								>
									X
								</button>
							</ol>
						))}
		</>
	)
}
