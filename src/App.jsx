import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/common/FloatingActions';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import Career from './pages/Career';
import ServiceDetail from './pages/ServiceDetail';
import ServiceCategory from './pages/ServiceCategory';
import IndustryDetail from './pages/IndustryDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services/category/:slug" element={<ServiceCategory />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
        </Routes>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
