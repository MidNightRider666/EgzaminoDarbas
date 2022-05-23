const { findUserWithEmail, CreateUser } = require('../Models/UserModel');
const { failResponce, successResponce } = require('../Utilities/dbHelper');
const {
  HidePass,
  verifyPass,
  generateJwtToken,
} = require('../Utilities/helper');

async function registering(req, res) {
  const {Email, password } = req.body;
  const hiddenpassword = HidePass(password);

  const insertResult = await CreateUser(Email, hiddenpassword);
  return insertResult === false
    ? failResponce(res)
    : successResponce(res, 'user has been successfully created');
}

async function loging(req, res) {
  const { Email, password } = req.body;

  const findResults = await findUserWithEmail(Email);
  if (findResults === false) return failResponce(res);
  if (!findResults.length)
    return failResponce(
      res,
      'Login failed. Invalid Email and Password combination',
    );
  const UserObj = findResults[0];

  if (!verifyPass(password, UserObj)) {
    return failResponce(
      res,
      'Login failed. Invalid Email and Password combination',
    );
  }
  const token = generateJwtToken(UserObj);
  successResponce(res, token);
}

module.exports = {
  registering,
  loging,
};
