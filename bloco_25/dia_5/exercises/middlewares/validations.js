function validateUsername(req, res, next) {
  const { username } = req.body;
  if (!username || username.length <= 3)
    return res.status(400).json({ message: 'Invalid username' });

  next();
};

function validateEmail(req, res, next) {
  const { email } = req.body;
  const regexEmail = /^[a-z0-9._]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;
  if (!regexEmail.test(email))
    return res.status(400).json({ message: 'Invalid email' });

  next();
};

function validatePassword(req, res, next) {
  const { password } = req.body;
  const regexPassword = /^[0-9]*$/;
  if (!password
      || password.length < 4
      || password.length > 8
      || !regexPassword.test(password))
    return res.status(400).json({ message: 'Invalid password' });
  
  next();
};

function validateToken(req, res, next) {
  const token = req.headers.authorization;
  const tokenRegex = !/^[a-zA-Z0-9]{12}$/;
  
  if (!token)
    return res.status(401).json({ message: 'Invalid Token' });

  next();
};

module.exports = {
  validateUsername,
  validateEmail,
  validatePassword,
  validateToken,
}