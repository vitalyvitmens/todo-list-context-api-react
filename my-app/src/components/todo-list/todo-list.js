import styles from './todo-list.module.css'
import { Todo } from './todo'
import { useTodo } from '../../hooks/useTodos'
import {useDispatch} from 'react-redux'

export const TodoList = () => {
  const dispatch = useDispatch()
	const { sortedTodos, sort, setSort } = useTodo()

  

	const sortHandler = () => setSort((prev) => !prev)

	return (
		<>
			<button
				className={styles.btnBrown}
				onClick={sortHandler}
				disabled={sortedTodos.length === 0}
			>
				{sort
					? 'Отфильтровать задачи по id'
					: 'Отфильтровать задачи по алфавиту'}
			</button>
			{sortedTodos.map((item) => (
				<Todo key={item.id} {...item} />
			))}
		</>
	)
}
