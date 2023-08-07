import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
	selectInput,
	selectEdit,
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
	const input = useSelector(selectInput)
	const edit = useSelector(selectEdit)
	const isUpdating = useSelector(selectIsUpdating)
	const search = useSelector(selectSearch)
	const sortTitle = useSelector(selectSortTitle)
	const editId = useSelector(selectEditId)

	const [inputValue, setInputValue] = useState('')

	const dispatch = useDispatch()

	// const { requestAddTodo, requestUpdateTodo, setSearch, inputCurrent } =
	// 	useTodo()

	useEffect(() => {
		setInputValue(inputCurrent)
	}, [inputCurrent])

	const handleSubmit = (e) => {
		e.preventDefault()
		input.current = inputValue
		if (edit?.id) {
			dispatch(updateTodoAsync(edit.id))
		} else {
			dispatch(addTodoAsync())
		}
	}

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<h2>My To-Do List</h2>
			<input
				type="text"
				value={search}
				name="search-todo"
				placeholder="Найти задачу..."
				onChange={({ target }) =>
					dispatch(setSearchActionCreator(target.value))
				}
				className="input-field"
			/>
			<p></p>
			<input
				type="text"
				value={inputValue}
				name="todo-input"
				placeholder="Новая задача"
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button
				disabled={inputValue === '' || search}
				className={styles.btnBlue}
				type="submit"
			>
				{edit ? 'Обновить' : 'Добавить'}
			</button>
		</form>
	)
}
