import { useLoaderData } from "react-router-dom";
import ProductCart from "./ProductCart";

const Products = () => {
    const products = useLoaderData();
    return (
        <div>
            {/* <h2 className="text-4xl">Total added Products: {products.length}</h2> */}
            <div className="container mx-auto  grid lg:grid-cols-3 md:grid-cols-2 gap-8 my-8">
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