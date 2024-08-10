

const AboutUs = () => {
    return (
        <div className="bg-custom-light">
            <div className='py-16 bg-custom-gradient text-center text-4xl text-white font-semibold'>
                <h1>About Us</h1>
            </div>
            <div className='grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 px-8 md:px-20 py-20'>
                <div className="">
                    <img className='w-2/3' src='https://i.ibb.co/c2NqWGQ/about-us-banner.jpg' alt="" />
                </div>
                <div className="">
                    <h3 className='mb-8 text-3xl font-semibold text-custom-red'>Save more with GO! We give you the lowest prices on all your grocery needs.</h3>
                    <h5 className='text-2xl font-semibold mb-2'>Our Vision</h5>
                    <p className='text-zinc-500 mb-4'>To redefine the grocery shopping experience by making it more accessible, affordable, and enjoyable for every household. We envision a world where quality products are available to all, where shopping becomes an experience rather than a chore.
                    </p>
                    <h5 className='text-2xl mb-2 font-semibold'>Our Goal</h5>
                    <p className='text-zinc-500'> Our mission is to lead the way in offering the best prices, a diverse range of products, and exceptional customer service. We are committed to sustainability, supporting local farmers, and delivering freshness right to your doorstep. Every day, we strive to make grocery shopping simple, convenient, and rewarding for our customers.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;