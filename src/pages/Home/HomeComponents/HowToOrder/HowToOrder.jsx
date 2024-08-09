
const HowToOrder = () => {
    return (
        <div className="bg-custom-light">
            <div className='py-16 bg-custom-gradient text-center text-4xl text-white font-semibold'>
                <h1>How To Order?</h1>
            </div>
            <div className="flex justify-center py-20 px-8 md:px-20">
                <div className="carousel w-full md:w-2/3">
                    <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/xHDMWxB/order-step1.webp" className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/K9nCqDf/order-step2.webp" className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://i.ibb.co/CHkwjVW/order-step3.webp" className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToOrder;