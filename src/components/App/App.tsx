import React from 'react';
import { Route, Routes } from 'react-router';

import Layout from '../common/Layout';
import FormPage from '../pages/formPage/FormPage';
import PalettePage from '../pages/palettePage/PalettePage';
import '../../assets/styles/style.scss';
import '../../assets/styles/media.scss';
import './App.css';

// /. imports

const App: React.FC = () => {
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
};

export default App;
