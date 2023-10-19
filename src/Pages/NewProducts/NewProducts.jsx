const NewProducts = () => {
  return (
    <div className=" border p-8">
      <h2 className="text-4xl text-center my-8">Our New Products</h2>
      <div className=" container mx-auto lg:grid lg:grid-cols-3 mb-4 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className=" h-[350px]"
              src="https://i.ibb.co/0CWw4Nk/Oppo-Reno-8-Pro-cameras.webp"
              alt="phone"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Oppo-Reno-8-Pro-cameras
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Smart Phone</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className=" h-[350px]"
              src="https://i.ibb.co/mGGQGBq/OPPO-A78-5-G-9.jpg"
              alt="phone"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              OPPO-A78-5-G-9
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Smart Phone</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              className=" min-w-full h-[350px]"
              src="https://i.ibb.co/BLPGx9W/oppo-f17-pro-featured.webp"
              alt="phone"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Oppo-f17-pro
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <div>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Smart Phone</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
