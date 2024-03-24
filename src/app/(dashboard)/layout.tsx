import NavBar from '@/components/Navigation';
import { LayoutInterface } from '@/types';

const DashboardLayout = ({ children }: LayoutInterface) => {
  return (
    <div className='flex flex-col'>
      <NavBar />
      {children}
    </div>
  );
};

export default DashboardLayout;
