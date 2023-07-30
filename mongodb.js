const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/GBS")
  .then(() => {
    console.log("connected");
  })
  .catch(() => {
    console.log("failed");
  });

const newSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    require: true,
  },
  enquiry: {
    type: String,
    require: true,
  },
});

const collection = mongoose.model("client", newSchema);

module.exports = collection;
