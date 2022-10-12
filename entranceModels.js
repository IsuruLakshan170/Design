const mongoose = require("mongoose");

const entranceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  entranceTime: {
    type: String,
    required: true,
  },
});

const entrance = mongoose.model("entrance", entranceSchema);

module.exports = entrance;