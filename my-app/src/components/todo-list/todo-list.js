import { useSelector, useDispatch } from 'react-redux'
import {
	selectTodosServer,
	selectTodo,
	selectSearch,
	selectCompleted,
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

export const TodoList = ({ id }) => {
	const search = useSelector(selectSearch)
	const todosServer = useSelector(selectTodosServer)
	const todo = useSelector(selectTodo)
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

	// const deleteTodo = () => {
	//   dispatch(deleteTodoAsync(id))
	// }

	console.log(todosServer)
	return todosServer
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
						} else {
							dispatch(updateTodoAsync)
							dispatch(setTodoActionCreator(''))
						}
					}}
				>
					✎
				</button>
				<button
					className={styles.deleteBtn}
					onClick={() => {
						dispatch(deleteTodoAsync)
					}}
				>
					X
				</button>
			</ol>
		))
}
