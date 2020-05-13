const mongoose = require('mongoose')

//defini para o mongoose qual o modelo vai ser utilizado
const Product = mongoose.model('Product')

//Tudo que for declarado dentro do module.exports vai ser exportado
module.exports = {

    async index(req, res) {
        const { page = 1,limit = 10 } = req.query;// req.query é para pegar os paramentros GET
        const products = await Product.paginate({}, { page, limit: Number.parseInt(limit) })

        return res.json(products)
    },

    async store(req, res) {
        const product = await Product.create(req.body)// já converte o JSON que esta no body para um objeto
        return res.json(product) // converto o Objeto para JSON e retorna para o cliente
    },

    async show(req, res) {
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },

    async update(req, res) {
        /* localiza o produto pelo primeiro paramentro, o segundo paramentro é o corpo da requisicao para atualizar e o terceiro informa que
         deve ser retornado o objeto atualizado*/
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }) 
        return res.json(product)
    },

    async destroy(req, res) {
        /* Localiza o objeto e remove */
        const product = await Product.findByIdAndDelete(req.params.id)
        return res.send()
    }

}

 //persiste na base de dados o produto
/* Product.create({
    title: 'estudo nodejs com mongodb',
    description: 'Teste inserindo modelo na base dados mongodb',
    url: 'www.norteng.com.br'
}) */