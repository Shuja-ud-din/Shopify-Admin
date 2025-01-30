import DashboardLayout from '@/Layout/DashboardLayout';
import Overview from '@/pages/dashboard/Overview';
import Users from '@/pages/dashboard/Users';
import Orders from '@/pages/dashboard/Orders';
import { Route, Routes } from 'react-router-dom';
import Products from '@/pages/dashboard/Products';
import Settings from '@/pages/dashboard/Settings';

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
