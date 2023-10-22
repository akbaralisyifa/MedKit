import img from '../../assets/img/1.jpg';

const CartHeader = () => {
  return (
    <div className="container mt-20">
      <div>
        <h1 className="font-firaSans font-normal lg:text-5xl text-2xl text-center">Your Cart</h1>
        <p className="text-center font-unicaOne text-6xl  text-white mx-auto  lg:w-20 w-14 border-t-4 border-black">-</p>
      </div>

      <div className="w-full">
        <table className="w-full">
          <thead className="border-b-2 border-black">
            <tr className="text-center  ">
              <td className=" py-3 font-firaSans text-xl font-extrabold w-1/2">Product</td>
              <td className=" py-3 font-firaSans text-xl font-extrabold w-1/4">Quantity</td>
              <td className=" py-3 font-firaSans text-xl font-extrabold w-1/5">Total</td>
            </tr>
          </thead>
          <tbody className="border-b-2 border-black">
            <tr>
              <td className="flex py-5">
                <img src={img} alt="" className="w-36 " />
                <div className="ml-11 self-center">
                  <h1 className="font-semibold text-xl font-firaSans">Glycolic Acid Cream</h1>
                  <p className="font-firaSans text-base">Obat Bebas</p>
                </div>
              </td>
              <td>
                <input type="number" />
              </td>
              <td className="text-center">
                <p>40.000</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartHeader;
