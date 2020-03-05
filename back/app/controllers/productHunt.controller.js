const ph = require('../config/axios.config')


exports.getProduct = (req, res) => {
	console.log('req.params.day', req.query)
		ph.get('/posts', { params: {
			day: req.query.day}
		})
		.then(data => {
			console.log('lenght', data.data.posts.length)
			res.send(data.data);
		})
		.catch(err => {
			res.status(500).send({
				message:
					err.message || "Some error occurred while getting data."
			});
		});
}
