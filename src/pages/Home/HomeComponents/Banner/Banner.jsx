

const Banner = () => {
    return (
        <div className=''>
            <div className='home-banner'>
                <img className='w-2/3 mx-auto h-auto' src="/src/images/home-banner.webp"alt="Home Banner" />
            </div>
            <div className='my-12 mx-12 md:mx-20'>
                <h3 className='text-center text-3xl font-semibold'>What we provide?</h3>
                    <div className="grid gird-cols-1 md:grid-cols-3 gap-4 mx-auto">
                        <div className="px-2">
                            <div className="card shadow-lg rounded p-4">
                                <div className="card-body">
                                    <h4 className="font-bold text-custom-teal text-xl">Freshly Picked</h4>
                                    <p>Our fresh produce is sourced every morning, you get the best from us</p><br />
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="card shadow-lg rounded p-4">
                                <div className="card-body">
                                    <h4 className="font-bold text-custom-teal text-xl">Convenient and Quick</h4>
                                    <p>No waiting in traffic, no haggling, no worries carrying groceries, they are delivered right at your door</p>
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="card shadow-lg rounded p-4">
                                <div className="card-body">
                                    <h4 className="font-bold text-custom-teal text-xl">Wide Products</h4>
                                    <p>With 4000+ products to choose from, forget scouring those aisles for hours</p><br />
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Banner;
