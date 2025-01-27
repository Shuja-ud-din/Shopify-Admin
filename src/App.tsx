import { useEffect, useState } from 'react';
import './App.css';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './views/Dashboard';

function App() {
  const location = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!localStorage.getItem('token'),
  );

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, [location.pathname]);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? <LoginPage /> : <Navigate to={'/dashboard/'} />
          }
        />
        <Route path="/dashboard/*" element={<Navigate to="/" />} />
        <Route path="/dashboard/users" element={<Navigate to="/users" />} />
        <Route path="/dashboard/orders" element={<Navigate to="/orders" />} />
        <Route path="/dashboard/products" element={<Navigate to="/products" />} />
        <Route path="/dashboard/settings" element={<Navigate to="/settings" />} />
      </Routes>
    );
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? <LoginPage /> : <Navigate to={'/dashboard/'} />
          }
        />
        <Route path="/dashboard/*" element={<Dashboard />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
