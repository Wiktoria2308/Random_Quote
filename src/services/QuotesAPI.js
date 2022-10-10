import axios from 'axios'

export const getRandomQuote = async () => {
	const response = await axios.get('https://api.quotable.io/random')
	
    return response.data
}

export default {
	getRandomQuote,
}
