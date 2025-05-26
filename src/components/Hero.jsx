const HeroSection = () => {
    return (
        <main className="hero flex max-w-[1280px] mx-auto h-[calc(100vh-72px)] items-center px-[30px]">
            <div className="hero-content flex flex-col gap-[36px] w-[60vw]">
                <h1 className="font-extrabold text-3xl md:text-7xl sm:text-5xl">YOUR FEET <br/> DESERVE <br/> THE BEST</h1>
                <p className="text-gray-800 max-w-[400px]">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className="hero-btn flex gap-[40px] text-[18px]">
                    <button className="bg-red-600 px-3 py-1 text-white">Shop Now</button>
                    <button className="border-1 px-3 py-1">Category</button>
                </div>

                <div className="shopping">
                    <p className="font-[14px] mb-[8px]">Also Available On</p>

                    <div className="brand-icons flex gap-[16px]">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="hero-image" />
            </div>
        </main>
    )
}
export default HeroSection;