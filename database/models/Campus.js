const mongoose = require('mongoose');

const CampusSchema = new mongoose.Schema({
  name: String,
  address: String,
  students: [{ name: String, age: Number, major: String }],
});

module.exports = mongoose.model('Campus', CampusSchema);
