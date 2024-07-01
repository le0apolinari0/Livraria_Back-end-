

const express = require("express")
const urlRotaLivro = require("./rotas/livro")
const urlRotaFavorito = require("./rotas/favorito")
const cors = require("cors")

const app = express()
  app.use(express.json())
  app.use(cors({origin:"*"}))
 
   app.use('/livros', urlRotaLivro)
   app.use('/favoritos', urlRotaFavorito)
   const port = 8000

    app.listen(port, () => {
  }) 