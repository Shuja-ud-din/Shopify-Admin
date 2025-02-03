import DashboardLayout from '@/Layout/DashboardLayout';
import Overview from '@/pages/dashboard/Overview';
import Users from '@/pages/dashboard/Users';
import { Route, Routes } from 'react-router-dom';
import Products from '@/pages/dashboard/Products';
import Settings from '@/pages/dashboard/Settings';
import ProductDetail from '@/pages/dashboard/ProductDetail';
import ProductGroups from '@/pages/dashboard/ProductGroup/ProductGroups';
import AddProductGroup from '@/pages/dashboard/ProductGroup/AddProductGroup';
import EditProductGroup from '@/pages/dashboard/ProductGroup/EditProductGroup';
import ProductGroupDetails from '@/pages/dashboard/ProductGroup/ProductGroupDetails';

const Dashboard = () => {
  return (
    <>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/details/:id" element={<ProductDetail />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/products-groups" element={<ProductGroups />} />
          <Route path="/products-groups/add" element={<AddProductGroup />} />
          <Route
            path="/products-groups/edit/:id"
            element={<EditProductGroup />}
          />
          <Route
            path="/products-groups/details/:id"
            element={<ProductGroupDetails />}
          />
        </Routes>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
