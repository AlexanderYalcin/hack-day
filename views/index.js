const fetch = require('node-fetch');
const Handlebars = require('handlebars');

const getLatestCurrency = async () => {
  let data = await fetch('https://api.coingecko.com/api/v3/exchanges')
  let dataParsed = await data.json()
  return dataParsed;
}

Handlebars.registerHelper('list', function (items, options) {
  let out = "<tr>";
  for (let i = 0, l = items.length; i < l; i++) {
    out = out + '<td>' + options.fn(items[i]) + '</td>';
  }
  return out + "</tr>";
});

Handlebars.registerHelper('distanceFixed', function (distance) {
  return distance.toFixed(2);
});

module.exports.getLatestCurrency = getLatestCurrency;