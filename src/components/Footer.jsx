import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-12 pb-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-cyan-400">GlobeMinds</span> Technologies
            </h3>
            <p className="text-slate-400 text-sm">
              We provide innovative IT solutions for organizations that demand excellence. 
              Creative website designing and professional software development services.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-cyan-400 text-sm">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-cyan-400 text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 text-sm">Services</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-cyan-400 text-sm">Products</Link></li>
              <li><Link to="/career" className="text-slate-400 hover:text-cyan-400 text-sm">Career</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-cyan-400 text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <span className="text-cyan-400">Email:</span> info@globemindstechnologies.com
              </li>
              <li>
                <span className="text-cyan-400">Phone:</span> +91 8856823361
              </li>
              <li>
                <span className="text-cyan-400">Phone:</span> 020-40147883
              </li>
              <li className="mt-2">
                <span className="text-cyan-400">Address:</span><br />
                6th Floor, Pentagon-2, P-2,<br />
                Magarpatta IT Park,<br />
                Magarpatta City, Pune – 411028,<br />
                India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} GlobeMinds Technologies. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-cyan-400 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
