import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Career = () => {
  const [jobs, setJobs] = useState([
    {
      _id: '1',
      title: 'Senior PHP Developer',
      experience: '3-5 Years',
      qualifications: 'B.Tech/MCA in Computer Science',
      technicalSkills: 'PHP, MySQL, Laravel, JavaScript, HTML5, CSS3',
      roleDetails: 'We are looking for an experienced PHP developer to join our team. The candidate should have strong expertise in PHP frameworks and database design. Responsible for developing and maintaining web applications.'
    },
    {
      _id: '2',
      title: 'Web Designer',
      experience: '1-3 Years',
      qualifications: 'Graduate in any discipline',
      technicalSkills: 'HTML5, CSS3, JavaScript, jQuery, Bootstrap, Photoshop',
      roleDetails: 'Looking for a creative web designer to design responsive websites. The candidate should have a strong portfolio and eye for design. Must be proficient in frontend technologies.'
    },
    {
      _id: '3',
      title: 'SEO Executive',
      experience: '1-2 Years',
      qualifications: 'B.Tech/MBA in Marketing',
      technicalSkills: 'SEO, Google Analytics, Google AdWords, Social Media Marketing',
      roleDetails: 'Seeking an SEO specialist to improve website rankings and drive organic traffic. Experience with SEO tools and techniques required.'
    },
    {
      _id: '4',
      title: 'Business Development Executive',
      experience: '2-4 Years',
      qualifications: 'MBA/BBA in Business or Marketing',
      technicalSkills: 'Client handling, Presentation, Communication, CRM',
      roleDetails: 'Looking for a motivated BD executive to generate new business opportunities. Good communication skills and understanding of IT services required.'
    }
  ]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/jobs');
      if (response.data.length > 0) {
        setJobs(response.data);
      }
    } catch (err) {
      console.log('Using static job data');
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!/^[\d\s\+\-()]+$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);
    
    if (!validateForm()) return;

    try {
      await axios.post('http://localhost:5000/api/jobs/apply', {
        ...formData,
        jobId: selectedJob?._id
      });
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => {
        setShowModal(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (err) {
      setSubmitStatus('error');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div>
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Career</h1>
            <p className="text-slate-400 text-lg">Join our team of talented professionals</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Open Positions</h2>
            <p className="text-slate-600">Explore current job openings and apply today</p>
          </motion.div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <motion.div
                key={job._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-3">
                        <span className="flex items-center">
                          <span className="text-cyan-500 mr-1">📍</span> {job.experience}
                        </span>
                        <span className="flex items-center">
                          <span className="text-cyan-500 mr-1">🎓</span> {job.qualifications}
                        </span>
                      </div>
                      <div className="mb-3">
                        <span className="text-sm font-semibold text-slate-700">Technical Skills: </span>
                        <span className="text-sm text-slate-600">{job.technicalSkills}</span>
                      </div>
                      <p className="text-slate-600 text-sm">{job.roleDetails}</p>
                    </div>
                    <button
                      onClick={() => { setSelectedJob(job); setShowModal(true); }}
                      className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-slate-900">Apply for {selectedJob?.title}</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                    placeholder="+91 8856823361"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-sm text-center">Application submitted successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm text-center">Failed to submit application. Please try again.</p>
                )}

                <button
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Career;
