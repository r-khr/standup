var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Stand-up meeting notes schema definition
var standupSchema = new Schema({
  memberName: String,
  project: String,
  workYesterday: String,
  workToday: String,
  impediment: String,
  createdOn: { type: Date, default: Date.now }
});

// Expose (export) the model now
module.exports = mongoose.model( 'Standup' , standupSchema );

