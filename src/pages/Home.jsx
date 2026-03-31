import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  const headlines = [
    "Creative Website Designing",
    "Web & Mobile Application Development",
    "Qualified Professionals to organizations that demand excellence"
  ];

  const services = [
    { title: "Creative Website Designing", icon: "🎨" },
    { title: "Web Application Development", icon: "💻" },
    { title: "Mobile App Development", icon: "📱" },
    { title: "SEO & Marketing", icon: "📈" },
  ];

  const values = [
    { title: "Innovation", description: "Cutting-edge solutions for modern businesses" },
    { title: "Excellence", description: "Quality that exceeds expectations" },
    { title: "Reliability", description: "Dependable services you can trust" },
    { title: "Customer Focus", description: "Your success is our priority" },
  ];

  return (
    <div>
      <section className="bg-slate-900 min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
              {headlines[0]}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-cyan-400 mb-4"
            >
              {headlines[1]}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-slate-300 mb-8"
            >
              {headlines[2]}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link to="/contact" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </Link>
              <Link to="/services" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Welcome to GlobeMinds Technologies</h2>
            <p className="text-slate-600 max-w-3xl mx-auto">
              We are a premier IT services provider specializing in creative website designing, 
              web application development, and customized software solutions. Our team of qualified 
              professionals is dedicated to delivering excellence to organizations that demand the best.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We believe in delivering excellence through innovation, reliability, and customer-focused solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-bold text-cyan-600 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
