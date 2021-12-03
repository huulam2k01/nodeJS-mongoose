const User = require("../model/user");
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const Employee = require("../model/employee");
const { AppError } = require("../utils/errorsHandle");

const generateToken = async (user) => {
  const { employeeNumber } = user;
  const employee = await Employee.findOne({ where: { employeeNumber } });
  const { jobTitle, officeCode } = employee;
  const payload = {
    employeeNumber,
    jobTitle,
    officeCode,
    iat: moment().unix(),
    expiresIn: 60 * 60,
  };
  const secret = "sthg";
  return jwt.sign(payload, secret);
};
const register = async (body) => {
  const { username, password, employeeNumber } = body;
  const user = await User.findOne({ username: username });
  if (!user) {
    const SALT = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, SALT);
    const newUser = await User.create({
      username,
      password: passwordHash,
      employeeNumber,
    });
    return newUser;
  }
  throw new AppError("Username already existed", 400);
};
const login = async (body) => {
  const { username, password } = body;
  const user = await User.findOne({ username: username });
  if (!user) {
    throw new AppError("Username is incorrect", 400);
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = await generateToken(user);
    return token;
  }
  throw new AppError("Password is incorrect", 400);
};

module.exports={
    generateToken,
    login,
    register
}
