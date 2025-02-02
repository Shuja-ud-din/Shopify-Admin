import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';

interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <div>
      <div className="w-full h-[100vh]  flex">
        <div className="w-[18.5%] bg-secondary ">
          <Sidebar />
        </div>
        <div className="w-[81.5%] flex flex-col">
          <Header />

          <div className="overflow-auto h-[100%] scrollbar-custom bg-gray-50">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
