import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Recommendation from './components/recommendation';
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Certi from './components/certi_temp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route exact path='/' 
          element={ <>
            <Navbar /> 
            <Recommendation />
          </> }>
          </Route>

          <Route exact path='/certi' element={
            <>
              <Navbar/>
              <Certi/>
            </>
          } ></Route>
        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
