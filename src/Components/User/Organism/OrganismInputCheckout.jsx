import AtomInputCheckout from '../Atom/AtomInputCheckout';

const OrganismInputCheckout = (props) => {
  const { handleChange } = props;

  return (
    <>
      <AtomInputCheckout name="email" style="w-full" type="email" placeholder="Email or Phone Number" handleChange={handleChange} />
      <AtomInputCheckout name="firstName" style="w-1/2" type="text" placeholder="First Name" handleChange={handleChange} />
      <AtomInputCheckout name="lastName" style="w-1/2" type="text" placeholder="Last Name" handleChange={handleChange} />
      <textarea name="address" onChange={handleChange} placeholder="Address" className="w-full h-32 py-3 px-2 border border-gryColor rounded-md  text-base font-firaSans placeholder:text-base mb-4" />
      <AtomInputCheckout name="city" style="w-full" type="text" placeholder="City" handleChange={handleChange} />
      <AtomInputCheckout name="phone" style="w-full" type="tel" placeholder="Phone Number" handleChange={handleChange} />
    </>
  );
};

export default OrganismInputCheckout;
