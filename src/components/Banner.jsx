import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bannerImg1 from '../assets/banner1.jpg';
import bannerImg2 from '../assets/banner2.jpg';
import bannerImg3 from '../assets/banner3.jpg';

const Banner = () => {
    return (
        <div className="container mx-auto my-10 ">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
            >
                <div className="">
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <div className=" bg-[#e0f7fa] text-center p-10 lg:p-[72px] shadow-lg rounded-lg">
                            <img
                                src={bannerImg1}
                                alt="Library Welcome"
                                className="w-full h-full lg:h-[700px] object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-3xl font-semibold mb-2">Welcome to Our Library</h2>
                            <p className="">
                                Discover a wide range of books, resources, and tools to enhance your learning experience. Explore our collection today!
                            </p>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div className="bg-[#e8e8bc] text-center p-10 lg:p-[72px] shadow-lg rounded-lg">
                            <img
                                src={bannerImg2}
                                alt="Featured Book"
                                className="w-full h-full lg:h-[700px] object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-2xl lg:text-3xl font-semibold mb-2">Featured Book of the Month</h2>
                            <p className="">
                                <strong>"Atomic Habits"</strong> by James Clear - Learn how small habits can lead to remarkable results.
                                Available now in the library!
                            </p>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <div className="bg-[#ebe3f9] text-center p-10 lg:p-[72px] shadow-lg rounded-lg">
                            <img
                                src={bannerImg3}
                                alt="Library Policies"
                                className="w-full h-full lg:h-[700px] object-cover rounded-lg mb-4"
                            />
                            <h2 className="text-3xl font-semibold mb-2">Easy Borrowing</h2>
                            <p className="">
                                Borrow books hassle-free and manage your borrowed items online. Check out our policies for more information.
                            </p>
                        </div>
                    </SwiperSlide>
                </div>

            </Swiper>
        </div>
    );
};

export default Banner;
