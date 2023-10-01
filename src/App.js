import React from 'react';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectedUsers from './components/SelectedUsers/SelectedUsers';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='container mb-5'>
          <Routes>
            <Route path='/' element={< TeamDetails />} />
            <Route path='/selected' element={<SelectedUsers />} />
            <Route path='*' element={<TeamDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
