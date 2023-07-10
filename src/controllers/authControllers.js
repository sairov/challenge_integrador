const userCredentials = {
  email: 'pepe@gmail.com',
  password: 'pepe123'
}

module.exports = {
  loginView:  (req, res) => res.render('./auth/login', {
    view: {
      title: 'Login | Funkoshop'
    }
  }),
  loginUser:  (req, res) => {
    const { email, password } = req.body;
    const emailValidation = userCredentials.email == email;
    const passwordValidation = userCredentials.password == password;

    req.session.isLogged = emailValidation && passwordValidation ? true : false;

    if (req.session.isLogged) {
      res.locals.isLogged = true;
      return res.redirect('/admin');
    }

    return res.status(401).send('Credenciales inválidas');
  },
  registerView:  (req, res) => res.render('./auth/register', {
    view: {
      title: 'Register | Funkoshop'
    }
  }),
  registerUser:  (req, res) => res.send('Register Route that receive the data when user click register button'),
  logoutUser:  (req, res) => {
    req.session.isLogged = false;
    res.send('Sesión finalizada con éxito.')
  },
}