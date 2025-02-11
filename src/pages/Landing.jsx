import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BookOpen, Bookmark, Library } from "lucide-react";

const Landing = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
            {/* Floating Book Illustrations */}
            <motion.div 
                className="absolute top-10 left-10 opacity-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
            >
                <BookOpen size={50} />
            </motion.div>

            <motion.div 
                className="absolute bottom-10 right-10 opacity-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
            >
                <Bookmark size={50} />
            </motion.div>

            <div className="relative z-10 max-w-5xl text-center p-6">
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Discover, Organize, and Elevate Your Library 📚
                </motion.h1>
                
                <motion.p
                    className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    EduShelf empowers you to explore thousands of books, track your reading journey, and seamlessly manage your personal or institutional library. Elevate your knowledge today!
                </motion.p>

                <motion.div
                    className="mt-6 flex justify-center gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    <Link to="/auth/register">
                        <motion.button 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            className="px-6 py-3 rounded-full text-lg font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 hover:shadow-lg transition-all"
                        >
                            Get Started
                        </motion.button>
                    </Link>
                    <Link to="/auth/login">
                        <motion.button 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            className="px-6 py-3 rounded-full text-lg font-semibold border border-gray-300 hover:bg-white hover:text-gray-900 transition-all"
                        >
                            Login
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Feature Highlights */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
                    <motion.div 
                        className="p-6 bg-gray-800 rounded-xl shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Library size={40} className="mx-auto text-yellow-400"/>
                        <h3 className="mt-3 text-xl font-bold text-white">Organize Your Books</h3>
                        <p className="mt-2 text-sm">Keep track of your personal or institutional library with ease.</p>
                    </motion.div>
                    <motion.div 
                        className="p-6 bg-gray-800 rounded-xl shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <Bookmark size={40} className="mx-auto text-yellow-400"/>
                        <h3 className="mt-3 text-xl font-bold text-white">Track Your Reading</h3>
                        <p className="mt-2 text-sm">Monitor your progress and manage your reading goals.</p>
                    </motion.div>
                    <motion.div 
                        className="p-6 bg-gray-800 rounded-xl shadow-lg"
                        whileHover={{ scale: 1.05 }}
                    >
                        <BookOpen size={40} className="mx-auto text-yellow-400"/>
                        <h3 className="mt-3 text-xl font-bold text-white">Discover New Reads</h3>
                        <p className="mt-2 text-sm">Explore thousands of books curated for your interest.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
