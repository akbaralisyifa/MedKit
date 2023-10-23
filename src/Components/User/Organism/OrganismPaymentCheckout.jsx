import bca from '../../../assets/icon/bca.png';
import bri from '../../../assets/icon/bri.png';
import bni from '../../../assets/icon/bni.png';
import dana from '../../../assets/icon/dana.png';
import AtomPayment from '../Atom/AtomPayment';

const OrganismPaymentCheckout = () => {
  const banks = [
    {
      img: [bca, bri, bni, dana],
      text: ['/ 08375623', '/ 2222334420', '/ 2333240990', '/ 08233455540'],
    },
  ];
  return (
    <div className="mb-5">
      <p className="font-firaSans text-2xl font-normal">Payment</p>
      <div className="flex flex-wrap">
        {banks[0].img.map((bankImg, index) => (
          <AtomPayment key={index} img={bankImg} text={banks[0].text[index]} />
        ))}
      </div>
    </div>
  );
};

export default OrganismPaymentCheckout;
