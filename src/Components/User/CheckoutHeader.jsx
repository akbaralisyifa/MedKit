import OrganismInputCheckout from './Organism/OrganismInputCheckout';
import OrganismPaymentCheckout from './Organism/OrganismPaymentCheckout';

import image from '../../assets/img/1.jpg';
import AtomInputCheckout from './Atom/AtomInputCheckout';
import AtomPaymentProof from './Atom/AtomFilePaymentProof';

const CheckoutHeader = () => {
  const handleChange = () => {};

  return (
    <div className="container">
      <div className="flex flex-wrap">
        {/* Bagian Form Delivery */}
        <div className="w-1/2 pt-10">
          <h1 className="font-firaSans text-3xl mb-7">Delivery</h1>
          <form className="w-5/6">
            <OrganismInputCheckout handleChange={handleChange} value="" />
            <OrganismPaymentCheckout />
            <AtomPaymentProof />
            <button className="w-full py-3 font-semibold font-firaSans text-white bg-frColor text-base rounded-md">Pay Now</button>
          </form>
        </div>

        {/* Bagian Total Harga */}
        <div className="w-1/2 border-l pl-10 pt-10">
          <div className="flex mb-6">
            <img src={image} alt="" className="w-28 mr-4" />
            <div>
              <h1 className="font-firaSans text-xl ">Glycolic Acid Cream</h1>
              <p className="font-firaSans text-base">Obat Oles</p>
              <p className="font-firaSans text-base">
                Items : <span className="font-semibold">2</span>
              </p>
            </div>
            <h2 className="mt-1 px-1 font-firaSans text-base">- Rp. 80.000</h2>
          </div>
          <div>
            <AtomInputCheckout disabled={true} type="text" name="discount" value={() => {}} handleChange={() => {}} placeholder="Discount Code" />
            <button className="font-firaSans font-semibold text-white bg-gray-500 py-3 rounded-md ml-3 px-5">Apply</button>
          </div>

          <div className="w-1/2 ">
            <div className="flex justify-between font-firaSans text-base">
              <h3>Subtotal</h3>
              <p>Rp. 80.000</p>
            </div>
            <div className="border-b border-gryColor flex justify-between font-firaSans font-light text-base mt-1">
              <h3>Shiping</h3>
              <p className="pb-2">Rp. 20.000</p>
            </div>
            <div className="flex justify-between font-firaSans mt-2">
              <h3>total</h3>
              <p>Rp. 100.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader;
