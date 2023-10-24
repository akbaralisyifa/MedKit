import heroImg from '../../assets/hero_Image/heroImg.png';
import OrganismDashboardNotif from './Organism/OrganismDashboardNotif';
import AtomTextHeader from './Atom/AtomTextHeader';

import total from '../../assets/icon/total.png';
import pendding from '../../assets/icon/penddingProduct.png';
import user from '../../assets/icon/registedUser.png';

const DashboardHeader = () => {
  return (
    <div className="p-10">
      <AtomTextHeader text="Welcome to Dashboard MedKit." />
      <div className="mt-24 flex justify-evenly">
        <OrganismDashboardNotif text="Total Product" icon={total} item="300" />
        <OrganismDashboardNotif text="Pendding Order" icon={pendding} item="300" />
        <OrganismDashboardNotif text="Registed User" icon={user} item="300" />
      </div>

      <img src={heroImg} alt="" className="mx-auto w-557 mt-32" />
    </div>
  );
};

export default DashboardHeader;
