import img1 from "../../assets/images/extra-banner (1).png";
import img2 from "../../assets/images/extra-banner (2).png";

const GreatDeals = () => {
  return (
    <div className="mt-8  py-8 border">
      <h2 className="text-5xl text-center">Great Deals</h2>
      <div className=" md:flex container lg:ml-60 mx-auto gap-8 mt-8">
        <div className=" md:w-1/2 mb-4">
          <img src={img1} alt="" />
        </div>
        <div className=" md:w-1/2">
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default GreatDeals;
