import Banner from './HomeComponents/Banner/Banner';
import HowToOrder from './HomeComponents/HowToOrder/HowToOrder';
import AboutUs from './HomeComponents/AboutUs/AboutUs';
import ContactUs from './HomeComponents/ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HowToOrder></HowToOrder>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;