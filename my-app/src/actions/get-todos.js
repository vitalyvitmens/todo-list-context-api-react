import { fetchTodosDataMock } from '../utils'

export const getTodosAsync = async (dispatch) => {
	const todos = await fetchTodosDataMock('GET')
	dispatch({
		type: 'GET_TODOS_ASYNC',
		payload: todos,
	})
}


useEffect(() => {
  setLoading(true)
  fetch('http://localhost:8204/todos')
    .then((loadedData) => loadedData.json())
    .then((loadedTodo) => {
      setTodos(loadedTodo)
    })
    .finally(() => setLoading(false))
}, [refresh])
