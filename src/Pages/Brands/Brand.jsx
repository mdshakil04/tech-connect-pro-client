import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { image, name } = brand;
  return (
    <Link to={`/products/${name}`}>
      <div className=" mt-8 ">
        <div className=" hero-content flex-col lg:flex-row gap-8  rounded-lg ">
          <div className=" w-1/2 rounded-lg shadow-2xl p-8">
            <img src={image} className=" " />
          </div>
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
