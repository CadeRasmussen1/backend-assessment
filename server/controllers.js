const favorites = require('./db.json')
let globalId = 1 

module.exports = {
    getFavorites: (req,res) => {
        res.status(200).send(favorites)
    },
    deleteFavorite: (req,res) => {
        let {id} = req.params

        let index = favorites.findIndex(elem => +elem.id === +id)
        favorites.splice(index, 1)
        res.status(200).send(favorites)
    },
    createFavorites: (req,res)=>{
        const {label, imageURL} = req.body
        let newFav = {
            label,
            imageURL,
            id: globalId
        }

        favorites.push(newFav)
        res.status(200).send(favorites)

        globalId++
    }
    
}