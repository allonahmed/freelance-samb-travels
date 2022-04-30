const mongoose = require("mongoose");

const roomCountSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  id: {
    type: Number
  },
  count: {
    type: Number,
    default: 0
  }
});

const rm = mongoose.model("room_count", roomCountSchema);
module.exports = rm;
