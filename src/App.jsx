import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './index.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<div>About Page</div>} />
                    <Route
                        path="/programs"
                        element={<div>Programs Page</div>}
                    />
                    <Route path="/apply" element={<div>Apply Page</div>} />
                    <Route path="/careers" element={<div>Careers Page</div>} />
                    <Route
                        path="/volunteer"
                        element={<div>Volunteer Page</div>}
                    />
                    <Route path="/donate" element={<div>Donate Page</div>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
