import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Games from './components/Games';
import Game from './components/Game';
import Review from './components/Review';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:id" element={<Game />} />
        <Route path="/games/:id/review" element={<Review />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;