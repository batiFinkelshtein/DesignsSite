import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarDesigns from './components/BarDesigns';
import FruitDesigns from './components/FruitDesigns';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bars" element={<BarDesigns />} />
        <Route path="/fruits" element={<FruitDesigns />} />
      </Routes>
    </Router>
  );
}

export default App;
