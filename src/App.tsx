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
