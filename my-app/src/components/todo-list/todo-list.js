import { useSelector, useDispatch } from 'react-redux'
import {
	selectTodosServer,
	selectTodo,
	selectSearch,
	selectCompleted,
	selectSortTitle,
} from '../../selectors'
import {
	setTodoActionCreator,
	toggleCompletedHandlerActionCreator,
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
	const completed = useSelector(selectCompleted)

	const dispatch = useDispatch()

	const toggleCompletedHandler = () =>
		toggleCompletedHandlerActionCreator(completed)

	// const updateTodo = () => {
	//   if (todo === '') {
	//     dispatch(setIsUpdatingActionCreator(true))
	//     dispatch(setTodoActionCreator(title))
	//   } else {
	//     dispatch(updateTodoAsync(id))
	//     dispatch(setTodoActionCreator(''))
	//   }
	// }
	const updateTodo = () => {
		if (todo) {
			dispatch(updateTodoAsync(todo))
		}
	}

	// const deleteTodo = () => {
	//   dispatch(deleteTodoAsync(id))
	// }

	const deleteTodo = () => dispatch(deleteTodoAsync())

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
						dispatch(toggleCompletedHandler())
						dispatch(toggleCompletedTodoAsync(id))
					}}
				>
					{title}
				</div>
				<button
					className={!todo ? styles.updateBtnYellow : styles.updateBtnGreen}
					onClick={() => {
						if (todo === '') {
							dispatch(setIsUpdatingActionCreator(true))
							dispatch(setTodoActionCreator(title))
							updateTodo()
						} else {
							dispatch(updateTodoAsync)
							dispatch(setTodoActionCreator(''))
							updateTodo()
						}
					}}
				>
					✎
				</button>
				<button className={styles.deleteBtn} onClick={deleteTodo}>
					X
				</button>
			</ol>
		))
}
