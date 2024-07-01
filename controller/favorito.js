const { getTodosLivrosFavoritos, insereLivroFavorito, deletaFavoritoPorId } = require("../service/favorito")


function getFavoritos (req, res) {
    try {
    const livros =  getTodosLivrosFavoritos() 
    res.send(livros)
   } catch (error) {
   res.status(500)
   res.send(error.message)
    }
  }
  function postFavorito (req, res) {
    try {
        const id = req.params.id
       insereLivroFavorito(id)
       res.status(201)
       res.send("Livro  Adicionado com sucesso")
    } catch (error) {
     res.status(500)
     res.send(error.message)
    }
  }  
  function deletaFavorito(req, res) {
    try {
        const id = req.params.id
        if(id && Number(id)){
          deletaFavoritoPorId(id)
          res.send("Livro Favorito deletado com sucesso")
        }else{
          res.status(422)
        res.send("O ID digitado e Invalido")
        }
        
    } catch (error) {
        res.status(500)
        res.send({error})
    }
 }
  module.exports = {
    getFavoritos,
    postFavorito,
    deletaFavorito,
  }