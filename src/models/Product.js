const mongoose = require('mongoose') // modulo para manipular a base de dados mongodb
const mongoosePaginate = require('mongoose-paginate') // modulo para fazer paginacao

//Schema do banco de dados  para produto
const ProductSchema = new mongoose.Schema({
    title: {
        type: String, //tipo
        required: true // É requerido
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now() //valor default, caso não seja informando nenhum valor para o atributo
    }
})

ProductSchema.plugin(mongoosePaginate) // defini que o schema vai utilizar mongoosePaginate para paginacao

//defini que o modelo para o schema 
mongoose.model('Product', ProductSchema)