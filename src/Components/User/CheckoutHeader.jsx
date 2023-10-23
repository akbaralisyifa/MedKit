import OrganismInputCheckout from './Organism/OrganismInputCheckout';
import OrganismPaymentCheckout from './Organism/OrganismPaymentCheckout';

const CheckoutHeader = () => {
  return (
    <div className="container">
      <div className="flex">
        <div className="w-1/2 pt-10">
          <h1 className="font-firaSans text-3xl mb-7">Delivery</h1>

          <form className="w-5/6">
            <OrganismInputCheckout />
            <OrganismPaymentCheckout />

            <input
              type="file"
              className="w-1/2 mb-5 border border-gray-300 py-2 px-3 rounded-lg file:bg-gryColor file:cursor-pointer file:py-1 file:px-7 file:rounded-md file:border file:font-firaSans file:text-slate-600 file:hover:text-black file:border-gryColor "
            />

            <button className="w-full py-3 font-semibold font-firaSans text-white bg-frColor text-base rounded-md">Pay Now</button>
          </form>
        </div>
        <div className="w-1/2 bg-teal-300">
          <h1 className="font-semibold text-2xl">Total Harga</h1>
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader;
