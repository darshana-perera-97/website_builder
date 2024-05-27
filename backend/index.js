const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route to handle text submission
app.post('/submit', (req, res) => {
  const text = req.body.text;
  console.log(`Received text: ${text}`);

  const filePath = path.join(__dirname, 'a.txt');

  // Read the existing file contents
  fs.readFile(filePath, 'utf8', (err, data) => {
    let currentData = [];

    if (err && err.code !== 'ENOENT') {
      console.error('Error reading file:', err);
      return res.status(500).json({ success: false });
    }

    if (data) {
      try {
        currentData = JSON.parse(data);
        if (!Array.isArray(currentData)) {
          currentData = [];
        }
      } catch (err) {
        console.error('Error parsing JSON:', err);
        currentData = [];
      }
    }

    // Check for duplicate text
    if (currentData.includes(text)) {
      return res.json({ success: false, message: 'Selected sub-domain is already taken. Try again.' });
    }

    // Append the new text
    currentData.push(text);

    // Write the updated data back to the file
    fs.writeFile(filePath, JSON.stringify(currentData, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        return res.status(500).json({ success: false });
      }

      // Respond with a success status
      res.json({ success: true });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
