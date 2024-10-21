const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const dataFilePath = path.join('C:', 'Users', 'Administrator', 'Desktop', 'appang', 'allinoneapp', 'public', 'assets', 'database', 'data.json');

// GET endpoint to retrieve data
app.get('/get', (req, res) => {
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data.');
    }
    res.json(JSON.parse(data));
  });
});

// POST endpoint to write data
app.post('/post', (req, res) => {
  const newData = req.body;
  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data.');
    }

    const jsonData = JSON.parse(data);
    jsonData.push(newData);

    fs.writeFile(dataFilePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error saving data.');
      }
      res.status(201).json(newData);
    });
  });
});

// PUT endpoint to update data by id
app.put('/put/:id', (req, res) => {
  
  const id = parseInt(req.params.id, 10); 
  const updatedData = req.body;

  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data.');
    }
    let jsonData = JSON.parse(data);
    const index = jsonData.findIndex(item => item.id === id);
    console.log("index => "+index);
    console.log(`Received PUT request for ID: ${req.params.id} body : ${ { ...jsonData[index], ...updatedData }}`);
    if (index === -1) {
      return res.status(404).send('Data not found.');
    }

    // Update the existing entry with new data
    jsonData[index] = { ...jsonData[index], ...updatedData };
    
    fs.writeFile(dataFilePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error saving data.');
      }
      
      res.json(jsonData[index]);
    });
  });
});

// DELETE endpoint to delete data by id
app.delete('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  fs.readFile(dataFilePath, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data.');
    }

    let jsonData = JSON.parse(data);
    const index = jsonData.findIndex(item => item.id === id);

    if (index === -1) {
      return res.status(404).send('Data not found.');
    }

    jsonData.splice(index, 1);

    fs.writeFile(dataFilePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error saving data.');
      }
      res.status(204).send();
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
