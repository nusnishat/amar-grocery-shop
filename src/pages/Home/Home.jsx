
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Banner from '../Banner/Banner';
import HowToOrder from '../HowToOrder/HowToOrder';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    const {user, setCartProducts} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`https://amar-grocery-shop-server.onrender.com/checkOut?email=${user?.email}`)
        .then(res => res.json())
        .then(data=>setCartProducts(data))
    }, []);
    
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