const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// mongodb conn
mongoose.connect("mongodb+srv://kedar123:kedar123password@cluster0.vfkpuo8.mongodb.net/mycompany")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("DB Error:", err.message));

app.use("/customers", require("./routes/customerRoutes"));
app.use("/employees", require("./routes/employeeRoutes"));



app.get("/", (req, res) => {
  res.send("API is running!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
