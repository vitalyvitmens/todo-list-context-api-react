import { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './todo-list.module.css'

export const TodoList = () => {
	const {
		todosServer,
		requestUpdateTodo,
		requestDeleteTodo,
		todo,
		setTodo,
		setIsUpdating,
		toggleCompletedHandler,
		requestUpdateCompletedTodo,
	} = useContext(AppContext)

	return todosServer.map(({ id, title, completed }) => (
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
}
