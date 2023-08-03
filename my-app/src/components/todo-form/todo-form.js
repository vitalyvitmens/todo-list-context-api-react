import { useSelector, useDispatch } from 'react-redux'
import {
	selectTodosServer,
	selectTodo,
	selectIsUpdating,
	selectSearch,
	selectSortTitle,
	selectEditId,
} from '../../selectors'
import {
	sortHandlerActionCreator,
	setTodosServerActionCreator,
	setEditIdActionCreator,
	setTodoActionCreator,
	setSearchActionCreator,
	addTodoAsync,
} from '../../actions'
import styles from './todo-form.module.css'

export const TodoForm = () => {
	const todosServer = useSelector(selectTodosServer)
	const todo = useSelector(selectTodo)
	const isUpdating = useSelector(selectIsUpdating)
	const search = useSelector(selectSearch)
	const sortTitle = useSelector(selectSortTitle)
	const editId = useSelector(selectEditId)

	const dispatch = useDispatch()

	const sortHandler = () => {
		dispatch(sortHandlerActionCreator(sortTitle))
	}

	const onSubmit = (e) => {
		e.preventDefault()

		if (editId) {
			const editTodo = todosServer.find((i) => i.id === editId)
			const updatedTodos = todosServer.map((t) =>
				t.id === editTodo.id
					? (t = { id: t.id, todo })
					: { id: t.id, todo: t.todo }
			)
			dispatch(setTodosServerActionCreator(updatedTodos))
			dispatch(setEditIdActionCreator(0))
			dispatch(setTodoActionCreator(''))
			return
		}

		if (todo !== '') {
			dispatch(setTodoActionCreator(''))
		}
	}

	const onChangeSearh = ({ target }) =>
		dispatch(setSearchActionCreator(target.value))

	const onChangeTodo = (e) => dispatch(setTodoActionCreator(e.target.value))

	const addTodo = () => {
		if (todo) {
			dispatch(addTodoAsync(todo))
		}
	}

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<h2>My To-Do List</h2>
			<input
				type="text"
				value={search}
				name="search-todo"
				placeholder="Найти задачу..."
				onChange={onChangeSearh}
				className="input-field"
			/>
			<p></p>
			<input
				type="text"
				value={todo}
				name="todo-input"
				placeholder="Новая задача"
				onChange={onChangeTodo}
			/>
			<button
				disabled={isUpdating || todo === '' || search}
				className={styles.btnBlue}
				type="submit"
				onClick={addTodo}
			>
				Добавить
			</button>
			<p></p>
			<button
				className={styles.btnBrown}
				onClick={sortHandler}
				disabled={todosServer.length === 0}
			>
				{sortTitle
					? 'Отфильтровать задачи по id'
					: 'Отфильтровать задачи по алфавиту'}
			</button>
		</form>
	)
}
