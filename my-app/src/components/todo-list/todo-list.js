import {useSelector, useDispatch} from 'react-redux'
import {selectTodosServer, selectTodo, selectSearch, selectCompleted } from '../../selectors'
import { setTodoActionCreator, toggleCompletedHandlerActionCreator, setIsUpdatingActionCreator} from '../../actions'
import {requestUpdateTodo, requestUpdateCompletedTodo, requestDeleteTodo} from '../../hooks'
import styles from './todo-list.module.css'

export const TodoList = () => {
  const search = useSelector(selectSearch)
  const todosServer = useSelector(selectTodosServer)
  const todo = useSelector(selectTodo)
  const completed = useSelector(selectCompleted)

  const dispatch = useDispatch()

  const toggleCompletedHandler = () => toggleCompletedHandlerActionCreator(completed)

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
						requestUpdateCompletedTodo(id)
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
							requestUpdateTodo(id)
              dispatch(setTodoActionCreator(''))
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
