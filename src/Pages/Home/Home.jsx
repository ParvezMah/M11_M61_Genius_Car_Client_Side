import About from "./About";
import Banner from "./Banner";
import Services from "./Services";


const Home = () => {
    return (
        <div className="my-4">
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;