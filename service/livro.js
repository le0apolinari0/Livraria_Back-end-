const { constants } = require("buffer")
const fs =  require("fs")

 function getTodosLivros (){
    return JSON.parse(fs.readFileSync("livros.json"))
 }

  function getLivroPorId (id){
  const livros = JSON.parse(fs.readFileSync("livros.json"))
  const livrosFiltrados = livros.filter( livro => livro.id === id )
  return livrosFiltrados
   
  }

  function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novaListaDeLivros = [...livros,livroNovo]
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros))
  }

  function modificarLivro( alteracoes, id ){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const livroModificado = livrosAtuais.findIndex(livro => livro.id === id )
    const livroAlterado = {...livrosAtuais[livroModificado], ...alteracoes}
    livrosAtuais[livroModificado] = livroAlterado
    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
  }

  function deletaLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livrosFiltrados = livros.filter( livro => livro.id !== id )
    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
 }
   

 module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificarLivro,
    deletaLivroPorId
}