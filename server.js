const express = require('express') // Framework para nodeJS
const mongoose = require('mongoose') // Oferece todo os recursos para trabalhar com mongodb
const bodyParser = require('body-parser')
const requireDir = require('require-dir') // para importar todos os arquivos de um diretorio que estao exportados
const cors = require('cors') // para acesso externo

//iniciando a app
const app = express()
//permitir que a aplicao receba entradas no formato json
app.use(express.json())
//libera o acesso a API de acordo com os parametros passados, sem parametros libera acesso a todos os dominios.
app.use(cors())

//conexao com a base de dados
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true })

//usa o require-dir para importa todos os arquivos dentro do diretorio abaixo
requireDir('./src/models')

app.use(bodyParser.json())

//Rotas
const routes = require('./src/routes')
app.use('/api',routes)

//defini a porta no qual o serviço vai ficar escutando
app.listen(3001)