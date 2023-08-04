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
	setIsUpdatingActionCreator,
	updateTodoAsync,
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

		if (todo) {
			dispatch(setTodoActionCreator(''))
		}
	}

	const onChangeSearh = ({ target }) =>
		dispatch(setSearchActionCreator(target.value))

	const onChangeTodo = ({ target }) =>
		dispatch(setTodoActionCreator(target.value))

	const addTodo = () => {
		isUpdating
			? dispatch(setIsUpdatingActionCreator(false))
			: dispatch(addTodoAsync(todo))
	}

	const sortHandler = () => {
		sortTitle
			? dispatch(sortHandlerActionCreator(false))
			: dispatch(sortHandlerActionCreator(true))
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
				disabled={!todo || search}
				className={styles.btnBlue}
				type="submit"
				onClick={addTodo}
			>
				{isUpdating ? 'Обновить' : 'Добавить'}
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
