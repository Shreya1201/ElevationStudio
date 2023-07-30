const express = require("express");
const collection = require("./mongodb");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get("/contact", cors(), (req, res) => {});

app.post("/contact", async (req, res) => {
  const { firstname, lastname, email, subject, phone, address, enquiry } =
    req.body;
  //const { lastname } = req.body.lastname;
  //const { email } = req.body.email;
  //const { subject } = req.body.subject;
  //const { phone } = req.body.phone;
  //const { address } = req.body.address;
  //const { enquiry } = req.body.enquiry;
  const data = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    subject: subject,
    phone: phone,
    address: address,
    enquiry: enquiry,
  };
  await collection.insertMany([data]);
});

app.listen(8000, () => {
  console.log("port connected");
});
