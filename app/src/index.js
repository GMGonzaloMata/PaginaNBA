require('dotenv').config()

const app = require('./server')
require('./database')

const port = app.get('port')

console.log(process.env.TESTING)

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})
