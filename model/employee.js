const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  employeeNumber: { type: Number, unique: true },
  lastName: String,
  firstName: String,
  extension: String,
  email: { type: String, unique: true },
  officeCode: String,
  reportsTo: Number,
  jobTitle: String,
  role: { type: Number, enum: ["1", "2", "3", "4"] },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
