import { Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PropertyDetail from './components/PropertyDetail';
import Contacts from './components/Contacts';

import './App.css';
import SuccessFlashMessage from './components/SuccessFlashMessage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/properties/:id" element={<PropertyDetail />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/success" element={<SuccessFlashMessage />} />
      </Routes>
    </div>
  );
}

export default App;
