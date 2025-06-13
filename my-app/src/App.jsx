import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import About from './pages/About';

export default function App() {
    return (
        <Router>
            <NavBar />
            <div className="min-h-screen p-4 bg-gray-300">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/clubs" element={<Clubs />} />
                    <Route path="/clubs/:clubId" element={<Clubs />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}