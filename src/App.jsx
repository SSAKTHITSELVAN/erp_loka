import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/common/FloatingActions';
import Home from './pages/Home';
import Career from './pages/Career';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career" element={<Career />} />
        </Routes>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}

export default App;
