import { LayoutInterface } from '@/types';

const DashboardLayout = ({ children }: LayoutInterface) => {
  return <div className='flex flex-col'>{children}</div>;
};

export default DashboardLayout;
