import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './features/home/Home';
import Test from './features/test/Test';
import Result from './features/result/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result/:type" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
