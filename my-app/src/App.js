import { TodoForm, TodoList, Loader } from './components'
import {useSelector} from 'react-redux'
import { selectIsLoading} from './selectors'
import styles from './app.module.css'

export const App = () => {
  const isLoading = useSelector(selectIsLoading)

	return (
			<div className={styles.container}>
				<TodoForm />
				{isLoading ? <Loader /> : <TodoList />}
			</div>
	)
}
