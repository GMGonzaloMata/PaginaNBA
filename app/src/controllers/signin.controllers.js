const indexCtrol = {}
const path = require('path')

indexCtrol.sendSignin = (req, res) => {
  // Construye la ruta absoluta al archivo index.html
  const indexPath = path.join(__dirname, '../../../client/src/pages/signin.html')
  // Envía el archivo index.html
  res.sendFile(indexPath)
}

module.exports = indexCtrol
