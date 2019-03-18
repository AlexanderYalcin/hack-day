const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const router = express.Router();
const { getLatestCurrency } = require('./views/index');
var exphbs  = require('express-handlebars');

app.use(express.static('public'));

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', async (req, res) => {
  let data = await getLatestCurrency()
	res.render('home', {data})
})

app.get('*', (req, res) => {
	res.render('404')
})

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');