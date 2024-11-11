const express = require('express');
const app = express();
const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes/random', (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ quote: randomQuote });
});

app.get('/api/quotes', (req, res) => {
  const person = req.query.person;
  if (person) {
    const personQuotes = quotes.filter(quote => quote.person === person);
    res.send({ quotes: personQuotes });
  } else {
    res.send({ quotes: quotes });
  }
});

app.post('/api/quotes', (req, res) => {
  const { quote, person } = req.query;
  if (!quote || !person) {
    return res.status(400).send('Both quote and person are required.');
  }
  const newQuote = { quote, person };
  quotes.push(newQuote);
  res.send({ quote: newQuote });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
