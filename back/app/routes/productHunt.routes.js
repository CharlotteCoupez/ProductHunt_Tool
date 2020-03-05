module.exports = app => {
	const ph = require("../controllers/productHunt.controller.js");

	var router = require("express").Router();

	router.get(`/product`, ph.getProduct);

	router.get(`/product/:date`, ph.getProduct);

	app.use('/api/producthunt', router);
}
