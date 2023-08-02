import { url } from '../utils'

export const fetchTodosDataMock = async (method, { id, ...payload } = {}) => {
	const options = {
		method: method,
		headers: { 'Content-Type': 'application/json' },
	}

	if (id !== undefined) {
		url += `/${id}`
		options.body = JSON.stringify(payload)
	} else if (method === 'POST') {
		options.body = JSON.stringify(payload)
	}

	const response = await fetch(url, options)

	return await response.json()
}
