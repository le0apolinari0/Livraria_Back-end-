

const express = require("express")
const urlRotaLivro = require("./rotas/livro")
const app = express()
app.use(express.json())


const port = 8000 
   app.use('/livros', urlRotaLivro)

    app.listen(port, () => {
  }) 