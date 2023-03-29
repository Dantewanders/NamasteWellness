const root = (app) => {
  app.get('/', (req, res) => {
    res.json({message: 'Hello Namaste World!'})
  })
}

module.exports = root