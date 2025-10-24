import express from 'express';
import { verifyToken } from '../middleware/auth';

const router = express.Router();

// Verify Firebase token endpoint
router.post('/verify-token', verifyToken, (req, res) => {
  res.json({ 
    success: true, 
    user: req.user 
  });
});

// Get user profile
router.get('/profile', verifyToken, (req, res) => {
  res.json({
    success: true,
    user: req.user
  });
});

export default router;