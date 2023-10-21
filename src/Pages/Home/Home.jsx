import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import GreatDeals from "../GreatDeals/GreatDeals";
import Contact from "../Navbar/ContactUs/ContactUs";
import NewProducts from "../NewProducts/NewProducts";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <NewProducts></NewProducts>
            <GreatDeals></GreatDeals>
            <Contact></Contact>
        </div>
    );
};

export default Home;