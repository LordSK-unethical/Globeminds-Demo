import express from 'express';
import Job from '../models/Job.js';
import Application from '../models/Application.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find({ isActive: true });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/apply', async (req, res) => {
  try {
    const { name, email, phone, message, jobId } = req.body;
    
    if (!name || !email || !phone) {
      return res.status(400).json({ message: 'Name, email, and phone are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const phoneRegex = /^[\d\s\+\-()]+$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({ message: 'Invalid phone format' });
    }

    const application = new Application({
      name,
      email,
      phone,
      message,
      jobId,
      appliedAt: new Date()
    });

    await application.save();
    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
