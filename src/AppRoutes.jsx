// ...existing code...
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Individual from './Components/Individual';
import Slider from './Components/Slider'; // optional direct route
import Mixed from './Mixed'; // optional direct route
import Poempage from './pages/Poempage';
import Articlepage from './pages/Articlepage';
import Subscriptionform from './Components/Subscriptionform';
import Searchresult from './Searchresult';
import Myspace from './Myspace';
import Myndividual from './Myindividual';
import Myform from './Myform';
import Myspaceform from './Myspaceform';

import Rough from './Rough';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/slider" element={<Slider />} />        {/* optional */}
      <Route path="/mixed" element={<Mixed />} />          {/* optional */}
      <Route path="/poempage" element={<Poempage />} /> 
            <Route path="/rough" element={<Rough />} /> 
         <Route path="/form" element={<Subscriptionform />} /> 
         <Route path="/articlepage" element={<Articlepage />} /> 
           <Route path="/myform" element={<Myform />} /> 
 
         <Route path="/search" element={<Searchresult />} />
    <Route path="/myspace" element={<Myspace />} />

        <Route path="/myspaceform" element={<Myspaceform />} />
      <Route path="/individual/:id" element={<Individual />} />
            <Route path="/myindividual/:id" element={<Myndividual />} />
    </Routes>
  );
}
// ...existing code...