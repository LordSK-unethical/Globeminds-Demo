import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String },
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
  resumePath: { type: String },
  appliedAt: { type: Date, default: Date.now }
});

const Application = mongoose.model('Application', applicationSchema);

export default Application;
