import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: "Creative Website Designing",
      description: "We create stunning, user-friendly websites that capture your brand essence and engage your audience. Our designs are responsive, modern, and tailored to your business needs.",
      icon: "🎨"
    },
    {
      title: "Web Hosting",
      description: "Reliable and secure web hosting solutions with 99.9% uptime. We provide scalable hosting services optimized for performance and speed.",
      icon: "🌐"
    },
    {
      title: "Web & Online Application Development",
      description: "Custom web applications built with cutting-edge technologies. From simple web apps to complex enterprise solutions, we deliver robust and scalable applications.",
      icon: "💻"
    },
    {
      title: "SEO & Internet Marketing",
      description: "Boost your online visibility with our comprehensive SEO and digital marketing services. We help you reach your target audience and grow your business.",
      icon: "📈"
    },
    {
      title: "Mobile Application Development",
      description: "Native and cross-platform mobile apps for iOS and Android. We build user-friendly mobile applications that provide seamless user experiences.",
      icon: "📱"
    },
    {
      title: "Customized Software Development",
      description: "Tailor-made software solutions designed specifically for your business requirements. We develop custom applications that streamline your operations.",
      icon: "⚙️"
    },
    {
      title: "Software Maintenance & Support",
      description: "Ongoing maintenance and support services to keep your software running smoothly. We provide timely updates, bug fixes, and technical assistance.",
      icon: "🔧"
    },
    {
      title: "Domain & Hosting",
      description: "We help you find the perfect domain name and provide secure hosting solutions. Complete domain registration and management services.",
      icon: "🔗"
    },
    {
      title: "SSL Certificates",
      description: "Secure your website with SSL certificates. We provide SSL installation and configuration services to ensure data security and build trust.",
      icon: "🔒"
    }
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-slate-400 text-lg">Comprehensive IT solutions for your business</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a Custom Solution?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6">
              Contact us to discuss your specific requirements. Our team will work with you to create a tailored solution that meets your business needs.
            </p>
            <a href="/contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
