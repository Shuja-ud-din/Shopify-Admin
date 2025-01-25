import DashboardLayout from '@/Layout/DashboardLayout';
import Overview from '@/pages/dashboard/Overview';
import Users from '@/pages/dashboard/Users';
import { Route, Routes } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
