
const { register, login} = require('../controller/auth')
const { updatePassword } = require('../controller/auth')
const { authenticate } = require('../middleware/authenticate')

const auth = (app) => {
  app.post('/auth/register', register)
  app.post('/auth/login', login)
  app.post('/auth/updatePassword', authenticate, updatePassword)
}

module.exports = auth
