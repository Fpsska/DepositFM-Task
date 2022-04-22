import React from 'react';
import { Route, Routes } from 'react-router';

import Layout from './components/common/Layout';
import FormPage from './components/pages/FormPage';
import PalettePage from './components/pages/palettePage/PalettePage';
import './assets/styles/style.scss';
import './assets/styles/media.scss';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/DepositFM-Task" element={<Layout />}>
          <Route index element={<FormPage />} />
          <Route path="Palette" element={<PalettePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
