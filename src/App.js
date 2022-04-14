import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './components/common/Layout';
import FormPage from "./components/pages/FormPage"
import "./assets/style.scss"
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/DepositFM-Task' element={<Layout />}>
          <Route index element={<FormPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
