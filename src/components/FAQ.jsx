import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "📚 What is EduShelf?",
        answer: "EduShelf is a digital platform designed to help users manage, explore, and track books effortlessly. Whether you're a student, librarian, or book lover, EduShelf has tools to streamline your reading journey.",
    },
    {
        question: "🔍 How can I find books on EduShelf?",
        answer: "You can search for books using the search bar, browse categories, and even track your reading progress. We also provide personalized recommendations based on your reading habits.",
    },
    {
        question: "🆓 Is EduShelf free to use?",
        answer: "Yes! EduShelf offers a free plan with essential features. However, we also provide a premium subscription with additional tools for advanced book tracking and management.",
    },
    {
        question: "📥 Can I add my own books to EduShelf?",
        answer: "Absolutely! You can add books manually to your collection, track progress, and categorize them based on your preferences.",
    },
    {
        question: "🔐 Is my book data secure?",
        answer: "Yes! EduShelf uses secure encryption and authentication methods to ensure that your book collections and reading history remain private and protected.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mb-12 py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4">
                <motion.h2 
                    className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Frequently Asked Questions ❓
                </motion.h2>
                <p className="mt-4 text-gray-300 text-lg text-center">
                    Have questions? We've got answers! Here are some of the most common questions about EduShelf.
                </p>

                <div className="mt-10 space-y-6">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index} 
                            className="bg-gray-800 rounded-xl p-5 cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-semibold">{faq.question}</h3>
                                {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                            </div>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.p
                                        className="mt-3 text-gray-400 text-sm"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {faq.answer}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
