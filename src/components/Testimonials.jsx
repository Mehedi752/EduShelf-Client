import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        feedback: "This platform has completely transformed the way I find and borrow books. Highly recommend it!",
        image: "https://i.ibb.co.com/dB9XB6C/final1.webp",
        role: "Book Enthusiast",
    },
    {
        id: 2,
        name: "Jane Smith",
        feedback: "The best library management system I've ever used. It's simple, intuitive, and incredibly effective.",
        image: "https://i.ibb.co.com/LZYNmBK/img1.webp",
        role: "Librarian",
    },
    {
        id: 3,
        name: "Mark Lee",
        feedback: "A truly seamless experience. I can easily find any book and borrow it with just a click.",
        image: "https://i.ibb.co.com/wWPQ4GL/final3.jpg",
        role: "Student",
    },
];

const Testimonials = () => {
    return (
        <div className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 my-10">
            <div className="container mx-auto px-5 lg:px-0">
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-3xl lg:text-5xl font-bold text-center text-gray-800 mb-10"
                >
                    What Our Users Say
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                            className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full mb-4 border-4 border-blue-500"
                            />
                            <h3 className="text-xl font-semibold text-gray-700">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                            <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
