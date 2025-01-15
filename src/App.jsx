import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from '../Components/Create';
import Read from '../Components/Read';
import Update from '../Components/Update';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Read />} /> {/* Root path */}
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
