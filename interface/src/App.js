import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, AppointmentPage } from './Pages/PagesIndex';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/appointment" element={<AppointmentPage />} />
    </Routes>
  );
};

export default App;
