import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage'; // Yeni bileşeni ekliyoruz
import HomePage from './App'; // Doğru dosya yolu


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes; 
