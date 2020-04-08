const express = require("express");
const bodyParser = require("body-parser");

const app = express();
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const array = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// post request

app.post("/", (req, res) => {
  var email = req.body.Email;

  if (array.includes(email) === true) {
    res.send("entry already exists");
  } else {
    array.push(email);
    console.log(array);
    res.send("Posted");
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
