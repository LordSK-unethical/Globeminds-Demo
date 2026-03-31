import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Career from './pages/Career';
import Contact from './pages/Contact';

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const pageTransition = { duration: 0.3 };

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
                  <Home />
                </motion.div>
              } />
              <Route path="/about" element={
                <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
                  <About />
                </motion.div>
              } />
              <Route path="/services" element={
                <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
                  <Services />
                </motion.div>
              } />
              <Route path="/products" element={
                <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
                  <Products />
                </motion.div>
              } />
              <Route path="/career" element={
                <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
                  <Career />
                </motion.div>
              } />
              <Route path="/contact" element={
                <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants} transition={pageTransition}>
                  <Contact />
                </motion.div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
