import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PropertyDetail from './components/PropertyDetail';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
      </Routes>
    </div>
  );
}

export default App;
