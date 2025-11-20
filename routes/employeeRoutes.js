const express = require("express");
const router = express.Router();
const Employee = require("../models/Employee");

// post
router.post("/", async (req, res) => {
  const employee = await Employee.create(req.body);
  res.send(employee);
});

// get
router.get("/", async (req, res) => {
  const employees = await Employee.find();
  res.send(employees);
});

// get by id
router.get("/:id", async (req, res) => {
  const employee = await Employee.findById(req.params.id);
  res.send(employee);
});

// update
router.put("/:id", async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(updated);
});

// del
router.delete("/:id", async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.send({ message: "Employee deleted" });
});

module.exports = router;
