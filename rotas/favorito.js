const { Router } = require("express")
const { getFavoritos, postFavorito, deletaFavorito } = require("../controller/favorito")


const router = Router()

router.get('/', getFavoritos)

router.post('/:id', postFavorito)

router.delete('/:id', deletaFavorito)

module.exports = router