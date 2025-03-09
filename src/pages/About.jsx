const About = () => {
    return (
        <div className="bg-[#f3f4f6] text-gray-900 py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 bg-clip-text mb-6">
                    About Us
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
                    Welcome to our <span className="font-semibold text-blue-500">Library Management System</span>, a digital-first platform designed to simplify library operations, making book management and borrowing seamless.
                </p>
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto mt-12">
                {/* Mission */}
                <div className="p-6 bg-white shadow-xl rounded-2xl border-l-4 border-blue-500 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-blue-500 mb-3">Our Mission</h3>
                    <p className="text-gray-700">
                        Our goal is to enhance the library experience with a secure and user-friendly system that enables smooth borrowing, tracking, and management of books.
                    </p>
                </div>

                {/* Key Features */}
                <div className="p-6 bg-white shadow-xl rounded-2xl border-l-4 border-teal-500 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-teal-500 mb-3">Key Features</h3>
                    <ul className="text-gray-700 list-disc pl-5 space-y-2">
                        <li>📚 Easy Book Management</li>
                        <li>🔒 Secure Authentication</li>
                        <li>📖 Seamless Borrowing & Returns</li>
                        <li>📊 Admin Controls for Library Staff</li>
                    </ul>
                </div>
            </div>

            {/* Vision Section */}
            <div className="text-center mt-16">
                <h3 className="text-3xl font-bold text-gray-900 bg-clip-text">
                    Our Vision
                </h3>
                <p className="text-gray-700 mt-4 max-w-4xl mx-auto px-4 leading-relaxed">
                    We envision a smart, digital-first library where books are easily accessible, transactions are smooth, and management is effortless.
                    Our platform, powered by the latest technologies, is designed for a scalable and efficient future.
                </p>
            </div>
        </div>
    );
}

export default About;
