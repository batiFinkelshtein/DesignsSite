import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BarDesigns from './components/BarDesigns';
import FruitDesigns from './components/FruitDesigns';
import NavigationBar from './components/navigationBar';
import HomePage from './components/HomePage';


function App() {
  return (
    
    <Router>
      {<NavigationBar />}
      <Routes>
      
      <Route path="/" element= {<HomePage/>}/>
        <Route path="/bars" element={<BarDesigns />} />
        <Route path="/fruits" element={<FruitDesigns />} />
      </Routes>
    </Router>
  );
}

export default App;
