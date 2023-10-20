import { useLoaderData, useParams } from "react-router-dom";
import ProductCart from "./ProductCart";

const Products = () => {
    const allProducts = useLoaderData();
    const {name} = useParams();
    const products = allProducts.filter(product => product.brand == name)
    return (
        <div> 
            <h2 className="text-4xl text-center my-8">Our Upcoming Product</h2>
        <div className="container mx-auto lg:ml-52 carousel carousel-center rounded-box grid grid-cols-3 ">
            <div className="carousel-item">
                <img className=" "
                src="https://i.ibb.co/mGGQGBq/OPPO-A78-5-G-9.jpg"
                alt="Pizza"
                />
            </div>
            <div className="carousel-item">
                <img className=" "
                src="https://i.ibb.co/0CWw4Nk/Oppo-Reno-8-Pro-cameras.webp"
                alt="Pizza"
                />
            </div>
            <div className="carousel-item ">
                <img className=" rounded-e-xl"
                src="https://i.ibb.co/BLPGx9W/oppo-f17-pro-featured.webp"
                alt="Pizza"
                />
            </div>
        </div>
        <h2 className="text-4xl text-center mt-8">Your Desire Products</h2>
            <div className="container mx-auto  grid md:grid-cols-2  gap-8 my-8">
                {
                    products.map(product => <ProductCart
                    key={product._id}
                    product={product}
                    ></ProductCart>)
                }
            </div>
        </div>
    );
};

export default Products;