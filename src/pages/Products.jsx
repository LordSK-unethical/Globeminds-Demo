import { motion } from 'framer-motion';

const Products = () => {
  const products = [
    {
      title: "Online Store / E-Commerce Platform",
      description: "A comprehensive e-commerce solution that enables you to set up and manage your online store effortlessly. Features include product management, shopping cart, secure payment gateways, inventory management, and customer relationship tools. Perfect for businesses looking to expand their online presence.",
      icon: "🛒",
      features: ["Product Management", "Secure Payments", "Inventory Tracking", "Customer Analytics"]
    },
    {
      title: "MLM Software",
      description: "Powerful Multi-Level Marketing software designed to manage your network marketing business efficiently. Track member hierarchies, commissions, payouts, and downline performance. Features include automated commission calculation, genealogy tree visualization, and comprehensive reporting.",
      icon: "🌐",
      features: ["Member Management", "Commission Tracking", "Genealogy Tree", "Automated Payouts"]
    },
    {
      title: "Inventory ERP",
      description: "Enterprise Resource Planning solution for efficient inventory management. Streamline your operations with real-time inventory tracking, purchase order management, supply chain optimization, and comprehensive reporting. Perfect for manufacturing and distribution businesses.",
      icon: "📦",
      features: ["Real-time Tracking", "Purchase Orders", "Supply Chain", "Financial Reports"]
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Products</h1>
            <p className="text-slate-400 text-lg">Industry-leading software solutions</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden ${index % 2 === 1 ? 'bg-slate-800' : ''}`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="text-5xl mb-4">{product.icon}</div>
                    <h3 className={`text-2xl font-bold mb-4 ${index % 2 === 1 ? 'text-white' : 'text-slate-900'}`}>
                      {product.title}
                    </h3>
                    <p className={`mb-6 ${index % 2 === 1 ? 'text-slate-300' : 'text-slate-600'}`}>
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 rounded-full text-sm ${
                            index % 2 === 1 
                              ? 'bg-cyan-900 text-cyan-300' 
                              : 'bg-cyan-100 text-cyan-700'
                          }`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={`flex items-center justify-center p-8 ${
                    index % 2 === 1 
                      ? 'bg-gradient-to-br from-slate-700 to-slate-800' 
                      : 'bg-gradient-to-br from-cyan-50 to-blue-50'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`w-32 h-32 rounded-full flex items-center justify-center ${
                        index % 2 === 1 
                          ? 'bg-cyan-900/50' 
                          : 'bg-cyan-200'
                      }`}
                    >
                      <span className="text-4xl">{product.icon}</span>
                    </motion.div>
                  </div>
                </div>
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Custom Product Development</h2>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6">
              Need a tailored solution? Our team can develop custom software products 
              specifically designed for your business requirements.
            </p>
            <Link to="Globeminds-Demo/contact" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
