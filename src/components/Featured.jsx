import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaUserShield, FaRocket } from "react-icons/fa";

const features = [
    {
        id: 1,
        icon: <FaBookOpen size={50} className="text-indigo-500" />,
        title: "Extensive Collection",
        description: "Explore a wide range of books from various genres, curated to cater to every reader's taste.",
    },
    {
        id: 2,
        icon: <FaUserShield size={50} className="text-green-500" />,
        title: "Secure Platform",
        description: "Your data is safe with us. Enjoy seamless browsing and borrowing with top-notch security.",
    },
    {
        id: 3,
        icon: <FaRocket size={50} className="text-blue-500" />,
        title: "Lightning Fast",
        description: "Borrow and return books effortlessly with our fast and intuitive interface.",
    },
];

const Featured = () => {
    return (
        <div className="py-20 bg-gradient-to-br from-purple-50 to-pink-100">
            <div className="container mx-auto px-5 lg:px-0">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-5xl font-bold text-center text-gray-800 mb-10"
                >
                    Why Choose Us
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: feature.id * 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
                            }}
                            className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
                        >
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-700">{feature.title}</h3>
                            <p className="text-gray-500 mt-2">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Featured;
