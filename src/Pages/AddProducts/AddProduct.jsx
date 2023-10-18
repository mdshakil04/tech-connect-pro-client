const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const descriptions = form.descriptions.value;
        const image = form.image.value;
        const newProduct = {name, brand, type, price, ratting, descriptions, image}
        console.log(newProduct);

    }
  return (
    <div >
      <div className=" container bg-[#F4F3F0] mx-auto p-8 mt-8 rounded-xl">
            <h2 className="text-4xl text-center font-mono">Add New Product</h2>
           
        <form onSubmit={handleAddProduct}>
          <div className=" grid md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Enter Coffee Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                name='brand'
                type="text"
                placeholder="Enter Brand Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <input
                name='type'
                type="text"
                placeholder="Enter Product Type"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                name='price'
                 type="text"
                placeholder="Enter Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Ratting</span>
              </label>
              <input
                name='ratting'
                type="text"
                placeholder="Enter Ratting"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Descriptions</span>
              </label>
              <input
                name="descriptions"
                type="text"
                placeholder="Enter short Descriptions"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                name="image"
                type="text"
                placeholder="Enter Image URL"
                className="input input-bordered"
                required
              />
            </div>
                <input className="btn bg-[#D2B48C] font-mono border-none btn-success w-full" type="submit" value="Add Product" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
