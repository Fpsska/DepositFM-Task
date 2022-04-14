import React from 'react';
import Layout from './components/common/Layout';
import { Route, Routes } from 'react-router';
import "./assets/style.scss"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/DepositFM-Task' element={<Layout />}>
          <Route index />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
