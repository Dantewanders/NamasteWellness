exports.pathLogger = (req, res, next) => {
  console.log("logged path:", `${req.method} ${req.path}`)
  next()
}