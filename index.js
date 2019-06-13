// Express
const express = require('express')
const app = express()
const port = 8080

// Database
const mongoose = require('mongoose')
const db = mongoose.connection
mongoose.connect('mongodb://localhost/notes')
const Notes = require('./models/Notes')

// Body Parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Express Validator
const expressValidator = require('express-validator')
app.use(expressValidator())

// Database - Mongodb Initialise.
db.on('error', err => {
  throw err
})

db.once('open', () => {
  console.log('MongoDB connected')
})
app.listen(port, () => {
  console.log(`server is on port: ${port}`)
})

app.get('/notes/archive/:condition', async (req, res) => {
  try {
    const { condition } = req.params
    const boolValue = JSON.parse(condition)
    const rec = await Notes.find({ archive: { $gte: boolValue } })
    return res.send(rec)
  } catch (error) {
    res.sendStatus(400)
    throw error
  }
})
// takes the second parameter and saves it.
app.get('/notes/save/:noteString', async (req, res) => {
  const { noteString } = req.params
  const noteSchema = new Notes()
  try {
    noteSchema.note = noteString
    await noteSchema.save()
    return res.sendStatus(200)
  } catch (error) {
    return res.sendStatus(400)
  }
})
// notes/delete/id for a note to be deleted.
app.get('/notes/delete/:id', async (req, res) => {
  try {
    const { id } = req.params
    await Notes.findByIdAndDelete(id)
    return res.sendStatus(200)
  } catch (error) {
    res.sendStatus(400)
    throw error
  }
})

// takes the new note and id and updates it
app.get('/notes/update/:note/:id', async (req, res) => {
  const { note, id } = req.params
  try {
    await Notes.findByIdAndUpdate(id, { note: note })
    return res.sendStatus(200)
  } catch (error) {
    res.sendStatus(400)
    throw error
  }
})

module.exports = app
