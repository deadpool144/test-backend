// formHandler.js
import express from 'express';

const router = express.Router();

// Middleware to parse URL-encoded bodies (as sent by HTML forms)
router.use(express.urlencoded({ extended: true }));
// Middleware to parse JSON bodies (if you're sending JSON data)
router.use(express.json());

// Route to handle form submission
router.post('/form', (req, res) => {
  // Access form data via req.body
  const { name} = req.body;

  console.log(`Received form data - Name: ${name},, ${req.body}`);

  // Respond to the client
  res.json({ message: 'Form data received successfully', data: req.body });
});

export default router;
