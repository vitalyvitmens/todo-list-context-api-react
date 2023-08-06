export const fetchTodosDataMock = async (method, { id, ...payload } = {}) => {
	let url = 'http://localhost:8204/todos'
	const options = {
		method: method,
		headers: { 'Content-Type': 'application/json' },
	}

	if (id) {
		url += `/${id}`
		options.body = JSON.stringify(payload)
	} else if (method === 'POST') {
		options.body = JSON.stringify(payload)
	}

	const response = await fetch(url, options)
	return await response.json()
}
