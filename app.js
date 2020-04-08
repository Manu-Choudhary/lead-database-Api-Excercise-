const express = require("express");

const app = express();
app.use(express.json());

const leads = [
  { id: 1, name: "Lead1" },
  { id: 2, name: "Lead2" },
  { id: 3, name: "Lead3" }
];

app.get("/", function(req, res) {
  res.send("Home Route");
});

// to get all the leads
app.get("/api/lead", (req, res) => {
  res.send(leads);
});

// to get information of a perticular lead

app.get("/api/lead/:id", (req, res) => {
  //   console.log(req.params.id);

  const lead = leads.find(c => c.id === parseInt(req.params.id));
  if (!lead) {
    res.status(404);
    res.send("The lead with given ID does not exist");
  }
  res.send(lead);
});

//update request

app.put("/api/lead/:id", (req, res) => {
  const lead = leads.find(c => c.id === parseInt(req.params.id));
  if (!lead) {
    res.status(404);
    res.send("The lead with given ID does not exist");
  }

  lead.name = req.body.name;
  res.send(lead);
});

// //post request

// app.post("/api/lead", (req, res) => {
//   const lead = {
//     id: leads.length + 1,
//     name: req.body.name
//   };
//   if (leads.indexOf(lead) === -1) {
//     leads.push(lead);
//   }

//   res.send(lead);
// });

//delete request from

app.delete("/api/lead/:id", (req, res) => {
  //find lead
  const lead = leads.find(c => c.id === parseInt(req.params.id));
  if (!lead) {
    res.status(404);
    res.send("The lead with given ID does not exist");
  }

  //delete

  const index = leads.indexOf(lead);
  // console.log(index);
  leads.splice(index, 1);

  res.send(lead);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listen on port ${port}`);
});
