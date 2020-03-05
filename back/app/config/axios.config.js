const axios = require('axios')
const dotenv = require('dotenv')

dotenv.config();
module.exports = axios.create({
	baseURL: process.env.PH_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Authorization': 'Bearer ' + process.env.TOKEN,
		'Host': 'api.producthunt.com'
	}
})
