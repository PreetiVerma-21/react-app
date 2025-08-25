
import { motion } from 'framer-motion';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { useLocation } from 'react-router-dom';
import NewHome from './pages/Home/NewHome';
import Gallery from './pages/Gallery';
import Documents from './pages/documents';
import SliderSection from './pages/SliderSection';

function App() {
  const location = useLocation();
  const hideLayout = location.pathname === '/dashboard' || location.pathname === '/login';
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="app"
    >
      {!hideLayout && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/new-home" element={<NewHome />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/docs" element={<Documents/>} />
          <Route path="/slider-section" element={<SliderSection/>} />
        </Routes>
      </main>
      {!hideLayout && <Footer />}
    </motion.div>
  );
}

export default App;