import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

const generateCaptcha = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operator = Math.random() > 0.5 ? '+' : '-';
  let answer, question;
  
  if (operator === '+') {
    answer = num1 + num2;
    question = `${num1} + ${num2}`;
  } else {
    answer = num1 - num2;
    question = `${num1} - ${num2}`;
  }
  
  return { question, answer };
};

router.get('/captcha', (req, res) => {
  const captcha = generateCaptcha();
  res.json(captcha);
});

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message, captcha, captchaAnswer } = req.body;

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    if (!captchaAnswer || parseInt(captchaAnswer) !== captcha) {
      return res.status(400).json({ message: 'Invalid captcha answer' });
    }

    console.log('Contact form submitted:', { name, email, phone, subject });

    res.json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Contact error:', err);
    res.status(500).json({ message: 'Failed to send message' });
  }
});

export default router;
