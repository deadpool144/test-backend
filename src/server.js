import express from 'express';
import cors from 'cors';
import uploadRoute from './upload.js'; // Import the upload route
import formHandler from './formHandler.js'

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());

// Use the upload route
app.use('/upload', uploadRoute);
app.use('/form', formHandler);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
