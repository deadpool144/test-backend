import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Set up storage with multer
const storage = multer.diskStorage({
  destination: (req, files, cb) => {
    cb(null, 'temp/'); // Save files to the 'temp' directory
  },
  filename: (req, files, cb) => {
    cb(null, `${Date.now()}-${files.originalname}`); // Generate a unique filename
    console.log()
  }
});

const upload = multer({ storage: storage });

// Route to handle file upload
router.post('/', upload.fields('file'), (req, res) => {
  res.json({ message: 'File uploaded successfully', files: req.files });
});

export default router;
