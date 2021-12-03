const Customers = require("../model/customer");

const addCustomer = async (req, res) => {
  try {
    const employee = new Customers(req.body);
    const result = await employee.save();
    return res.send(result);
  } catch (error) {
     return res.json({ error: error.message });
  }
};

const getAllCustomer = async (req, res) => {
  try {
    const customers = await Customers.find();
    return res.json(customers);
  } catch (error) {
    return res.json({ error: error.message });
  }
};
const getCustomerById = async (req, res) => {
  try {
    const customer = await Customers.findOne({ customerNumber: req.params.id });
    return res.send(customer);
  } catch (error) {
    return res.json({ error: error.message });
  }
};
const updateCustomer = async (req, res) => {
  try {
    const customer = await Customers.findOne({ customerNumber: req.params.id });
    employee.set(req.body);
    const result = await customer.save();
    return res.send(result);
  } catch (error) {
    next(error);
  }
};
const deleteCustomer = async (req, res) => {
  try {
    const result = await Customers.deleteOne({ customerNumber: req.params.id });
    return res.send(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllCustomer,
  deleteCustomer,
  getCustomerById,
  updateCustomer,
  addCustomer
};
