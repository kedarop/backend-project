const express = require("express");
const router = express.Router();
const Customer = require("../models/Customer");


router.post("/", async (req, res) => {
  const customer = await Customer.create(req.body);
  res.send(customer);
});


router.get("/", async (req, res) => {
  const customers = await Customer.find();
  res.send(customers);
});
router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.send(customer);
});


router.put("/:id", async (req, res) => {
  const updated = await Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(updated);
});

router.delete("/:id", async (req, res) => {
  await Customer.findByIdAndDelete(req.params.id);
  res.send({ message: "Customer deleted" });
});

module.exports = router;

