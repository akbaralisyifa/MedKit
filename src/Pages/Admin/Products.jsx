import AdminProductsHeader from '../../Components/Admin/ProductHeader';
import NavbarAdmin from '../../Components/Navbar/NavbarAdmin';

const Products = () => {
  return (
    <div className="flex">
      <NavbarAdmin />
      <div className="w-full bg-trColor">
        <AdminProductsHeader />
      </div>
    </div>
  );
};

export default Products;
