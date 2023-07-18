import { useContext } from 'react'
import { AppContext } from '../../context'
import styles from './todo-form.module.css'

export const TodoForm = () => {
	const {
		onSubmit,
		todo,
		setTodo,
		requestAddTodo,
		isUpdating,
		search,
		setSearch,
	} = useContext(AppContext)

	return (
		<form className={styles.form} onSubmit={onSubmit}>
			<h2>My To-Do List</h2>
			<input
				type="text"
				value={search}
				name="search-todo"
				placeholder="Найти задачу..."
				onChange={({ target }) => setSearch(target.value)}
				className="input-field"
			/>
			<p></p>
			<input
				type="text"
				value={todo}
				name="todo-input"
				placeholder="Новая задача"
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button
				disabled={isUpdating || todo === '' || search}
				className={styles.btnBlue}
				type="submit"
				onClick={requestAddTodo}
			>
				Добавить
			</button>
		</form>
	)
}
