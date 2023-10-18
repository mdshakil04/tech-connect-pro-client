import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import GreatDeals from "../GreatDeals/GreatDeals";
import NewProducts from "../NewProducts/NewProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <NewProducts></NewProducts>
            <GreatDeals></GreatDeals>
        </div>
    );
};

export default Home;