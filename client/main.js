let complimentBtn = document.querySelector('#complimentButton')
let fortuneBtn = document.querySelector('#fortuneButton')
const form = document.querySelector('form')

const baseURL = 'http://localhost:4004'

const favoriteCallback = ({ data: favorites }) => displayFavorites(favorites)
const errCallback = err => console.log(err)

const getAllFavorites = () => axios.get(baseURL + '/api/favorites').then(favoriteCallback).catch(errCallback)
const createFavorite = body => axios.post(baseURL + '/api/favorites', body).then(favoriteCallback).catch(errCallback)
const deleteFavorite = id => axios.delete(`${baseURL}/api/favorites/${id}`).then(favoriteCallback).catch(errCallback)

function submitHandler(e) {
  e.preventDefault()

  let label = document.querySelector('#favoritething')
  let imageURL = document.querySelector('#img')
  console.log(label.value, imageURL)
  let bodyObj = {
    label: label.value,
    imageURL: imageURL.value
  }

    createFavorite(bodyObj)

    label.value = ''
    imageURL.value = ''

}
const favoritesContainer = document.querySelector('#favorite-container')
function createFavoriteCard(favorite) {
  const favoriteCard = document.createElement('div')
  favoriteCard.classList.add('favorite-card')

  favoriteCard.innerHTML = `<img alt = 'favorite cover image' src = ${favorite.imageURL} class="favorite-cover-image"/>
  <p class = "label">${favorite.label}</p>
  <button onclick="deleteFavorite(${favorite.id}">delete</button>` 

  favoritesContainer.appendChild(favoriteCard)
}

function displayFavorites(arr) {
  favoritesContainer.innerHTML = ''
  for (let i = 0; i < arr.length; i++) {
    createFavoriteCard(arr[i])
  }
}

let getCompliment = () => {
   axios.get("http://localhost:4004/api/compliment/")
   .then(function (response) {
     const data = response.data;
     alert(data);
   });
 };
 
 let getFortune = () => {
     axios.get('http://localhost:4004/api/fortune/')
     .then(function (response){
         console.log('response', response)
         const data = response.data
         console.log(data)
       alert(data)
     })
   };


form.addEventListener('submit', submitHandler)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
getAllFavorites()