

const AboutUs = () => {
    return (
        <div className="bg-custom-light">
            <div className='py-16 bg-custom-gradient text-center text-4xl text-white font-semibold'>
                <h1>About Us</h1>
            </div>
            <div className='grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 px-12 md:px-20 py-20'>
                <div className="">
                    <img className='w-2/3' src='/src/images/about-us-banner.jpg' alt="" />
                </div>
                <div className="">
                    <h3 className='mb-8 text-3xl font-semibold text-custom-red'>Save more with GO! We give you the lowest prices on all your grocery needs.</h3>
                    <h5 className='text-2xl font-semibold mb-2'>Our Vision</h5>
                    <p className='text-zinc-500 mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here,</p>
                    <h5 className='text-2xl mb-2 font-semibold'>Our Goal</h5>
                    <p className='text-zinc-500'>When looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, Lorem Ipsum has been the industry standard dummy text ever since.,</p>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;