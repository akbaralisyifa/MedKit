import DashboardHeader from '../../Components/Admin/DashboardHeader';
import NavbarAdmin from '../../Components/Navbar/NavbarAdmin';

const Dashboard = () => {
  return (
    <div className="flex">
      <NavbarAdmin />
      <div className="w-full bg-trColor">
        <DashboardHeader />
      </div>
    </div>
  );
};

export default Dashboard;
