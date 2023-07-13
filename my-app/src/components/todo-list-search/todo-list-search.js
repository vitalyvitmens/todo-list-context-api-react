import { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './todo-list-search.module.css'

export const TodoListSearch = () => {
	const {
		todosServer,
		requestUpdateTodo,
		requestDeleteTodo,
		todo,
		setTodo,
		setIsUpdating,
		search,
	} = useContext(AppContext)

	return todosServer
		.filter((todo) => {
			return search ? todo.title.includes(search) : todo
		})
		.map(({ id, title }) => (
			<ol key={id}>
				<span>😎</span>
				{title}
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
