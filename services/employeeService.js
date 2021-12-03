const Employee = require("../model/employee");

const addEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    const result = await employee.save();
    return res.send(result);
  } catch (error) {
    next(error);
  }
};

const getAllEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    return res.send(employees);
  } catch (error) {
    return res.json({ error: error.message });
  }
};
const getEmployeeById = async (req, res) => {
  try {
    const employees = await Employee.findOne({ employeeNumber: req.params.id });
    return res.send(employees);
  } catch (error) {
    return res.json({ error: error.message });
  }
};
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOne({ employeeNumber: req.params.id });
    employee.set(req.body);
    const result = await employee.save();
    return res.send(result);
  } catch (error) {
    next(error);
  }
};
const deleteEmployee = async (req, res) => {
  try {
    const result = await Employee.deleteOne({ employeeNumber: req.params.id });
    return res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllEmployee,
  deleteEmployee,
  getEmployeeById,
  updateEmployee,
  addEmployee,
};
