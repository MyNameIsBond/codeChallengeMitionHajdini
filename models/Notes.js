const mongoose = require('mongoose')
const NotesSchema = mongoose.Schema({
  note: {
    type: String,
    required: true
  },
  archive: {
    type: Boolean,
    default: false
  },
  owner: {
    type: String
  }
})

let Notes = (module.exports = mongoose.model('Notes', NotesSchema))
