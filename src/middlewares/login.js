const isLogged = (req, res, next) => {
  if (req.session.isLogged) {
   return next();
  }

  return res.status(401).send('Necesitas estar logueado para ingresar');
}

module.exports = {
  isLogged
}