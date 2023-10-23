import { useNavigate } from 'react-router-dom';
import img from '../../assets/img/1.jpg';
import OrganismTextHead from './Organism/OrganismCartTextHead';
import OrganismCartTabelHead from './Organism/OrganismCartTabelHead';

const CartHeader = () => {
  const navigate = useNavigate();

  const action = () => {
    navigate('/cart/checkout');
  };

  return (
    <div className="container mt-20">
      <OrganismTextHead text="Your Cart" garis="-" />

      <div className="w-full">
        <table className="w-full">
          <OrganismCartTabelHead text={['Product', 'Quantity', 'Total']} />

          <tbody className="">
            <tr className="border-b-2 border-black">
              <td className="flex py-5 ">
                <img src={img} alt="" className="w-36 " />
                <div className="ml-11 self-center">
                  <h1 className="font-semibold text-xl font-firaSans">Glycolic Acid Cream</h1>
                  <p className="font-firaSans text-base">Obat Bebas</p>
                </div>
              </td>
              <td>
                <p className="text-center text-xl font-semibold font-firaSans">2</p>
              </td>
              <td className="text-center">
                <p className="font-firaSans text-xl">40.000</p>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Subtotal */}
        <div className=" flex flex-col items-end">
          <div className="flex w-1/2 mt-4 justify-end">
            <p className="w-1/2 text-end font-firaSans font-light text-xl">Subtotal</p>
            <p className="w-1/3 text-end font-firaSans text-xl">80.000</p>
          </div>
          <p className="italic text-base font-semibold pt-3">Taxes and shipping calculated at checkout</p>
          <button onClick={action} className="py-3 px-12 mt-7 bg-frColor text-white hover:bg-scColor text-xl font-semibold transition ease-in-out">
            Checkout
          </button>
        </div>
        {/* end Subtotal */}
      </div>
    </div>
  );
};

export default CartHeader;
