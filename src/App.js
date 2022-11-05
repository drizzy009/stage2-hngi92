import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Contact from './components/Contact';
import Notfound from './components/Notfound';

function App() {
  return (
    <div className='p-6 font-inter '>
      <Router>
        <Routes>
          <Route path='' element={<Main />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
