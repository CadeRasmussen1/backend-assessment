const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.
const ctrl = require('./controllers.js')

app.post('/api/favorites', ctrl.createFavorites)
app.get('/api/favorites', ctrl.getFavorites)
app.delete('api/favorites/:id', ctrl.deleteFavorite)

app.get('/api/compliment', (req, res) => {
  const compliments = [`Gee, you're a smart cookie!`,
					 'Cool shirt!',
					 'Your Javascript skills are stellar.',
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get('/api/fortune', (req, res) => {
  const fortunes = ['A beautiful, smart, and loving person will be coming into your life.',
      'All your hard work will soon pay off.',
      'At the touch of love, everyone becomes a poet.',
      'Believe it can be done.',
      'Courtesy begins in the home.']

  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)

})

app.listen(4004, () => console.log("Server running on 4004"));