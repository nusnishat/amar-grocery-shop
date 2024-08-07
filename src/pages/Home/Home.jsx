import Banner from './HomeComponents/Banner/Banner';
import HowToOrder from './HomeComponents/HowToOrder/HowToOrder';
import AboutUs from './HomeComponents/AboutUs/AboutUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowToOrder></HowToOrder>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;