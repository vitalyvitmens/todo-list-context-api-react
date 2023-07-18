import { useState, useContext } from 'react'
import { AppContext } from '../../context'
import styles from './todo-list.module.css'

export const TodoList = () => {
	const {
		todosServer,
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

	const sortHandler = () =>
		sortTitle ? setSortTitle(false) : setSortTitle(true)

	const todosServerSearch = () =>
		todosServer
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
						className={!todo ? styles.updateBtnYellow : styles.updateBtnGreen}
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
				? todosServerSearch().sort((a, b) => (a['title'] > b['title'] ? 1 : -1))
				: todosServerSearch()}
		</>
	)
}
