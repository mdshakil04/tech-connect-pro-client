import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {
    const [brands, setBrands] = useState([])
    useEffect(() =>{
        fetch('brands.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    },[])
    return (
        <div className=" ">
            <h2 className="text-7xl text-center font-mono">Our top Brands</h2>
            <div className=" container mx-auto md:grid lg:grid-cols-3 md:grid-cols-2 md:gap-12">
                {
                    brands.map(brand => <Brand key={brand.id} brand={brand}></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;