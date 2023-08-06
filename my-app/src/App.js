import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TodoForm, TodoList, Loader } from './components'
import { selectLoading } from './selectors'
import { getTodosAsync } from './actions'
import styles from './app.module.css'

export const App = () => {
	const dispatch = useDispatch()
	const loading = useSelector(selectLoading)

	useEffect(() => {
		dispatch(getTodosAsync)
	}, [dispatch])

	return (
		<div className={styles.container}>
			<TodoForm />
			{loading ? <Loader /> : <TodoList />}
		</div>
	)
}
