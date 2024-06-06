const express = require('express')
const path = require('path')
// Inicializaciones
const app = express()
// const morgan = require('morgan')

// Settings
app.set('port', process.env.PORT ?? 3000)

// Middlewares
// app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

// routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/signin.routes'))

// Servir archivos estáticos desde el directorio 'client/src'
app.use(express.static(path.join(__dirname, '../../client/src')))

module.exports = app
