module.exports = {
  loginView:  (req, res) => res.render('./auth/login', {
    view: {
      title: 'Login | Funkoshop'
    }
  }),
  loginUser:  (req, res) => res.send('Login Route that receive the data when user click login button'),
  registerView:  (req, res) => res.render('./auth/register', {
    view: {
      title: 'Register | Funkoshop'
    }
  }),
  registerUser:  (req, res) => res.send('Register Route that receive the data when user click register button'),
}