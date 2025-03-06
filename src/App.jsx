import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import Apply from './pages/Apply';
import Careers from './pages/Careers';
import './index.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="programs" element={<Programs />} />
                    <Route path="apply" element={<Apply />} />
                    <Route path="careers" element={<Careers />} />
                    <Route path="volunteer" element={<Volunteer />} />
                    <Route path="donate" element={<Donate />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
