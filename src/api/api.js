import fetchData from './fetchData.js'

const API_ENDPOINT = 'https://...'

const api = {
	getCatById: id => fetchData(`${API_ENDPOINT}/api/cats/${id}`, 'getCatById')
}

export default api
