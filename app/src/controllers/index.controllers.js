const indexCtrol = {}
const path = require('path')
const User = require('../models/User')

indexCtrol.sendIndex = (req, res) => {
  // Construye la ruta absoluta al archivo index.html
  const indexPath = path.join(__dirname, '../../../client/src/pages/index.html')
  // Envía el archivo index.html
  res.sendFile(indexPath)
}

indexCtrol.createAccount = async (req, res) => {
  const { user, password } = req.body
  const newUser = new User({ user, password })
  newUser.save()
  res.redirect('/')
}

module.exports = indexCtrol
