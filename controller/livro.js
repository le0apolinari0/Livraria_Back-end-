
const { getTodosLivros, getLivroPorId, insereLivro, modificarLivro, deletaLivroPorId  } = require("../service/livro")

     function getLivros (req, res) {
      try {
      const livros =  getTodosLivros() 
      res.send(livros)
     } catch (error) {
     res.status(500)
     res.send(error.message)
      }
    }

    function getLivro(req, res) {
      try {
        const id = req.params.id
          if( id && Number(id)) {
            const livro=  getLivroPorId(id) 
            res.send(livro)
          }else{
            res.status(422)
            res.send("O Id digitado e Invalidooo")
          }
      } catch (error) {
       res.status(500)
       res.send(error.message)
      }
    }

    function postLivro (req, res) {
        try {
           const livroNovo = req.body
           insereLivro(livroNovo)
           res.status(201)
           res.send("Livro Adicionado com sucesso")
           res.status(422)
           res.send("O Campo nome é Obrigatorio")
        } catch (error) {
         res.status(500)
         res.send(error.message)
        }
      }  
    function patchLivro   (req, res) {
      try {
        const id = req.params.id
        if(id && Number(id)){
          const body = req.body
          modificarLivro(body,id)
          res.send("Livro modificado com sucesso")
        }else{
          res.status(422)
          res.send("O Id digitado e Invalido")
        }
      } catch (error) {
        res.status(500)
        res.send({error})
     }
    }
    function deleteLivro(req, res) {
      try {
          const id = req.params.id
          if(id && Number(id)){
            deletaLivroPorId(id)
            res.send("Livro deletado com sucesso")
          }else{
            res.status(422)
          res.send("O ID digitado e Invalido")
          }
          
      } catch (error) {
          res.status(500)
          res.send({error})
      }
   }


  module.exports= {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
 }