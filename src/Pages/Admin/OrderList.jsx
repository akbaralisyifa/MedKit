import OrderListHeader from '../../Components/Admin/OrderListheader';
import NavbarAdmin from '../../Components/Navbar/NavbarAdmin';

const OrderList = () => {
  return (
    <div className="flex">
      <NavbarAdmin />
      <div className="w-full bg-trColor">
        <OrderListHeader />
      </div>
    </div>
  );
};

export default OrderList;
