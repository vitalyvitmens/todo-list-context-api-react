import { TodoForm, TodoList, Loader } from './components'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsLoading } from './selectors'
import {
	getTodosAsync,
	updateTodoAsync,
	deleteTodoAsync,
	toggleCompletedTodoAsync,
} from './actions'
import styles from './app.module.css'

export const App = () => {
	const dispatch = useDispatch()
	const isLoading = useSelector(selectIsLoading)

	useEffect(() => {
		dispatch(getTodosAsync)
		dispatch(updateTodoAsync)
		dispatch(deleteTodoAsync)
		dispatch(toggleCompletedTodoAsync)
	}, [dispatch])

	return (
		<div className={styles.container}>
			<TodoForm />
			{isLoading ? <Loader /> : <TodoList />}
		</div>
	)
}
