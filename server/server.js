// server/server.js
const express = require('express');
const multer = require('multer');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Set up multer for handling file uploads
const upload = multer({
  dest: 'uploads/', // Temporary location for uploaded files
});

// Create the uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Endpoint to handle image upload and conversion to PNG
app.post('/upload', upload.single('avatar'), async (req, res) => {
  const tempPath = req.file.path;
  const targetPath = path.join(__dirname, 'uploads', `${req.file.filename}.png`);

  try {
    // Convert image to PNG and save it
    await sharp(tempPath)
      .png()
      .toFile(targetPath);

    // Remove the temporary file
    fs.unlinkSync(tempPath);

    // Return the path of the saved image
    res.json({ path: `/uploads/${req.file.filename}.png` });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process image' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
