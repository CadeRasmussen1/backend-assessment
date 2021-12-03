const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const ctrl = require('./contorllers.js')

app.get('/api/hobbies', ctrl.getHobbies)
app.post('/api/hobbies', ctrl.postHobbies)
app.delete('/api/hobbies', ctrl.deleteHobbies)


app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

// let fortuneBtn = document.querySelector("")

// let getFortune = () => {
//     axios.get('http://localhost:4000/api/fortune/')
//     .then(function (res){
//       const data = res.data
//       alert(data)
//     })
// }

// fortuneBtn.addEventListener('click', getFortune)

app.get('/api/fortune', (req, res) => {
  const fortunes = ['A beautiful, smart, and loving person will be coming into your life.',
      'All your hard work will soon pay off.',
      'At the touch of love, everyone becomes a poet.',
      'Believe it can be done.',
      'Courtesy begins in the home.']

  let randomIndex = Math.floor(Math.random() * fortunes.lenght)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)

})



app.listen(4000, () => console.log("Server running on 4000"));
