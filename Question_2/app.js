const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const { DATABASE } = process.env;
const studentRoute = require("./routes/student");
const parentRoute = require("./routes/parent");

mongoose.connect(
  DATABASE,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MONGO DB DataBase Connected");
  }
);

app.use("", studentRoute);
app.use("", parentRoute);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server  Started @ 3000");
});

// DATABASE =
//   "mongodb+srv://gaurav:yelmpcamp123@cluster0.1qwd3.mongodb.net/school?retryWrites=true&w=majority";
