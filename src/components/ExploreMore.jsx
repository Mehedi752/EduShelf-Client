import React from 'react';
import { easeOut, motion } from 'framer-motion';
import img1 from '../assets/library-1.jpg';
import img2 from '../assets/library-2.jpg';
import { Link } from 'react-router-dom';

const ExploreMore = () => {
    return (
        <div className="container mx-auto py-[100px] lg:py-12 mb-10 bg-[#f3f3f3]">
            <div className="">
                <div className="flex flex-col lg:flex-row justify-between items-center px-5 md:px-[20px] lg:px-[200px] gap-10">
                    <motion.div
                        animate={{ y: -50 }}
                        transition={{ duration: 0.8, delay: 10, ease: easeOut, repeat: Infinity }} className='w-full lg:w-1/2'>
                        <h1 className="text-5xl font-bold">
                            <motion.span
                                animate={{ color: ['#ff3333','#FBE414','#60E70C'] }}
                                transition={{ duration: 0.8, repeat: Infinity }}> Discover Your </motion.span>
                            Next Great Read
                        </h1>
                        <p className="py-6">
                            A vast collection of books across genres, waiting for you to explore. Dive into imaginative worlds or
                            Explore the wonders of science or Uncover the past and its stories or Solve thrilling puzzles
                            and so much more.
                        </p>
                        <Link to={'/books'} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg ">
                            Start Exploring
                        </Link>
                    </motion.div>

                    <div className="w-full lg:w-[55%]">
                        <motion.img
                            animate={{ y: [50, 100, 50] }}
                            transition={{ duration: 10, repeat: Infinity }} src={img1} alt="" className="w-[350px] rounded-t-[40px] rounded-br-[40px] border-l-4
                       border-b-4
                       border-blue-600" />

                        <motion.img
                            animate={{ x: [100, 150, 100] }}
                            transition={{ duration: 10, repeat: Infinity }} src={img2} alt="" className="w-[350px] rounded-t-[40px] rounded-br-[40px] border-l-4
                       border-b-4
                       border-blue-600" />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ExploreMore;
