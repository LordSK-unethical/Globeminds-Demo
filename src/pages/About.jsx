import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    { name: 'Software Development', percentage: 95 },
    { name: 'HTML5 & CSS3 Website Design', percentage: 76 },
    { name: 'SEO', percentage: 100 },
    { name: 'Marketing & eCommerce', percentage: 65 },
  ];

  return (
    <div>
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
            <p className="text-slate-400 text-lg">Learn more about our mission and vision</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-cyan-600 mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To be a global leader in providing innovative IT solutions, empowering businesses 
                with cutting-edge technology that drives growth and excellence. We envision a world 
                where every organization has access to premium IT services that transform their 
                digital presence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To deliver high-quality, customized software solutions that meet the unique needs 
                of our clients. We are committed to excellence, innovation, and building long-term 
                partnerships through exceptional service and technical expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-cyan-600 mb-4">Our Plan</h3>
              <p className="text-slate-600">
                Continuous innovation and skill development to stay ahead of technology trends. 
                Expanding our service portfolio while maintaining focus on quality and customer 
                satisfaction. Building a team of experts who share our passion for excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Expertise</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our team possesses extensive skills and experience in various domains of IT services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-6 rounded-lg"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-slate-900">{skill.name}</span>
                  <span className="text-cyan-600 font-bold">{skill.percentage}%</span>
                </div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
              <p className="text-slate-600 mb-6">
                We're ready to help you with your IT needs. Reach out to us for any inquiries 
                about our services or to discuss your project.
              </p>
              <div className="space-y-3">
                <p className="flex items-center text-slate-700">
                  <span className="text-cyan-600 font-semibold mr-2">Email:</span>
                  info@globemindstechnologies.com
                </p>
                <p className="flex items-center text-slate-700">
                  <span className="text-cyan-600 font-semibold mr-2">Phone:</span>
                  +91 8856823361, 020-40147883
                </p>
                <p className="flex items-start text-slate-700">
                  <span className="text-cyan-600 font-semibold mr-2">Address:</span>
                  6th Floor, Pentagon-2, P-2, Magarpatta IT Park,<br />
                  Magarpatta City, Pune – 411028, India
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">✓</span>
                  Qualified & Experienced Professionals
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">✓</span>
                  Customized Solutions for Your Business
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">✓</span>
                  On-time Delivery & Support
                </li>
                <li className="flex items-center">
                  <span className="text-cyan-500 mr-2">✓</span>
                  Competitive Pricing
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
