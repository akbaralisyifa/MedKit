import error from '../assets/icon/error.png';

const PageNotFound = () => {
  return (
    <div className="flex flex-col text-center">
      <img src={error} alt="Image Error" className="inline-block mx-auto" />
      <h1 className="-mt-32 text-notfound font-bold font-dangrek drop-shadow-2xl ">404</h1>
      <h2 className="font-extralight text-4xl -m-14">Page Not Found !</h2>
    </div>
  );
};

export default PageNotFound;
