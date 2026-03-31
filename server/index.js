import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import jobRoutes from './routes/jobs.js';
import contactRoutes from './routes/contact.js';
import Job from './models/Job.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use('/api/jobs', jobRoutes);
app.use('/api/contact', contactRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Globeminds';

const seedJobs = async () => {
  const count = await Job.countDocuments();
  if (count === 0) {
    const defaultJobs = [
      {
        title: 'Senior PHP Developer',
        experience: '3-5 Years',
        qualifications: 'B.Tech/MCA in Computer Science',
        technicalSkills: 'PHP, MySQL, Laravel, JavaScript, HTML5, CSS3',
        roleDetails: 'We are looking for an experienced PHP developer to join our team. The candidate should have strong expertise in PHP frameworks and database design.',
        isActive: true
      },
      {
        title: 'Web Designer',
        experience: '1-3 Years',
        qualifications: 'Graduate in any discipline',
        technicalSkills: 'HTML5, CSS3, JavaScript, jQuery, Bootstrap, Photoshop',
        roleDetails: 'Looking for a creative web designer to design responsive websites.',
        isActive: true
      },
      {
        title: 'SEO Executive',
        experience: '1-2 Years',
        qualifications: 'B.Tech/MBA in Marketing',
        technicalSkills: 'SEO, Google Analytics, Google AdWords, Social Media Marketing',
        roleDetails: 'Seeking an SEO specialist to improve website rankings and drive organic traffic.',
        isActive: true
      },
      {
        title: 'Business Development Executive',
        experience: '2-4 Years',
        qualifications: 'MBA/BBA in Business or Marketing',
        technicalSkills: 'Client handling, Presentation, Communication, CRM',
        roleDetails: 'Looking for a motivated BD executive to generate new business opportunities.',
        isActive: true
      }
    ];
    await Job.insertMany(defaultJobs);
    console.log('Default jobs seeded');
  }
};

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    await seedJobs();
    const server = app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
    
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is in use, trying ${PORT + 1}...`);
        app.listen(PORT + 1, () => {
          console.log(`Server running on port ${PORT + 1}`);
        });
      }
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });
