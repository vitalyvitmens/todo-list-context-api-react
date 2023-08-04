import { useSelector, useDispatch } from 'react-redux'
import {
	selectTodosServer,
	selectTodo,
	selectSearch,
	selectSortTitle,
	selectIsUpdating,
} from '../../selectors'
import {
	setTodoActionCreator,
	setIsUpdatingActionCreator,
	deleteTodoAsync,
	updateTodoAsync,
	toggleCompletedTodoAsync,
} from '../../actions'
import styles from './todo-list.module.css'

export const TodoList = () => {
	const search = useSelector(selectSearch)
	const todosServer = useSelector(selectTodosServer)
	const todo = useSelector(selectTodo)
	const sortTitle = useSelector(selectSortTitle)
	const isUpdating = useSelector(selectIsUpdating)

	const dispatch = useDispatch()

	const sortedTodosServer = sortTitle
		? todosServer.sort((a, b) => a.title.localeCompare(b.title))
		: todosServer.sort((a, b) => a.id - b.id)

	return sortedTodosServer
		.filter((todo) => {
			return search ? todo.title.includes(search) : todo
		})
		.map(({ id, title, completed }) => (
			<ol key={id}>
				<span>{id}</span>
				<div
					className={completed ? styles.todoLineThrough : styles.todo}
					onClick={() => {
						dispatch(toggleCompletedTodoAsync(id, completed ? false : true))
            console.log(id, completed)
					}}
				>
					{title}
				</div>
				<button
					className={todo ? styles.updateBtnGreen : styles.updateBtnYellow}
					// onClick={updateTodoAsync(id, todo)}
					onClick={() => {
						dispatch(setIsUpdatingActionCreator(true))
						if (!todo) {
							dispatch(setTodoActionCreator(title))
							console.log(id, title, completed)
							// dispatch(updateTodoAsync(id, todo))
						} else {
							dispatch(updateTodoAsync(id, todo))
							console.log(todo)
							dispatch(setTodoActionCreator(''))
						}
					}}
				>
					✎
				</button>
				<button
					className={styles.deleteBtn}
					onClick={() => {
						dispatch(deleteTodoAsync(id))
					}}
				>
					X
				</button>
			</ol>
		))
}
