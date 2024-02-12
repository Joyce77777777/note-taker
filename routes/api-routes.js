const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const path = require("path");

const dbPath = path.join(__dirname, "..", "db", "db.json");

// Utility function to read and parse JSON data from file
const readDbFile = () => {
  return JSON.parse(fs.readFileSync(dbPath, "utf8"));
};

// Utility function to write JSON data to file
const writeDbFile = (data) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2)); // Beautify the JSON output
};

// GET request handler for '/api/notes'
router.get('/api/notes', (req, res) => {
  res.json(readDbFile());
});

// POST request handler for '/api/notes'
router.post('/api/notes', (req, res) => {
  const dbJson = readDbFile();
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  dbJson.push(newNote);
  writeDbFile(dbJson);
  res.json(dbJson);
});

// DELETE request handler for '/api/notes/:id'
router.delete('/api/notes/:id', (req, res) => {
  const data = readDbFile();
  const filteredData = data.filter(note => note.id !== req.params.id);
  writeDbFile(filteredData);
  res.json("Note deleted.");
});

module.exports = router;
