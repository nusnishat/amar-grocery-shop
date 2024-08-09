import Banner from './HomeComponents/Banner/Banner';
import HowToOrder from './HomeComponents/HowToOrder/HowToOrder';
import AboutUs from './HomeComponents/AboutUs/AboutUs';
import ContactUs from './HomeComponents/ContactUs/ContactUs';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

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