import Overview from '@/pages/dashboard/Overview';
import { Route, Routes } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </>
  );
};

export default Dashboard;
