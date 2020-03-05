var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')

var app = express();
const PORT = process.env.PORT || 3000
// var corsOptions = {
// 	origin: `http://localhost:${PORT}`
// };

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

app.get('/', function (req, res) {
	res.send('Hello world!');
});

require("./app/routes/productHunt.routes")(app);

app.listen(PORT, function () {
	console.log(`Mon serveur écoute le port ${PORT}.`)
})

// app.use(function (req, res, next) {
// 	res.status(404).send("Sorry can't find that!")
// })
