import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {selectIsLoading, selectSortTitle, selectTodosServer, selectRefreshTodos } from '../selectors'
import { setIsLoadingActionCreator, setTodosServerActionCreator} from '../../actions'

export const useRequestGetTodos = (

  ) => {
    const isLoading = useSelector(selectIsLoading)
    const refreshTodos = useSelector(selectRefreshTodos)
    const sortTitle = useSelector(selectSortTitle)

    const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setIsLoadingActionCreator(true))
		sortTitle
			? fetch('http://localhost:8204/todos?_sort=title')
					.then((loadedData) => loadedData.json())
					.then((loadedTodo) => {
						dispatch(setTodosServerActionCreator(loadedTodo))
					})
					.finally(() => dispatch(setIsLoadingActionCreator(false)))
			: fetch('http://localhost:8204/todos')
					.then((loadedData) => loadedData.json())
					.then((loadedTodo) => {
						dispatch(setTodosServerActionCreator(loadedTodo))
					})
					.finally(() => dispatch(setIsLoadingActionCreator(false)))
	}, [isLoading, refreshTodos, sortTitle])

	return {
		isLoading: isLoading,
	}
}
