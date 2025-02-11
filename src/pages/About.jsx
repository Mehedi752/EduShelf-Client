
const About = () => {
    return (
        <div>
            <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-16 px-6 md:px-16">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-300">About Us</h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Welcome to our <span className="text-blue-400 font-semibold">Library Management System</span>, a digital-first platform built to simplify library operations, making book management and borrowing seamless.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
                    {/* Mission */}
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-blue-300 mb-4">Our Mission</h3>
                        <p className="text-gray-400">
                            Our goal is to enhance the library experience with a secure and user-friendly system that enables smooth borrowing, tracking, and management of books.
                        </p>
                    </div>

                    {/* Features */}
                    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-blue-300 mb-4">Key Features</h3>
                        <ul className="text-gray-400 list-disc pl-5">
                            <li>📚 Easy Book Management</li>
                            <li>🔒 Secure Authentication</li>
                            <li>📖 Seamless Borrowing & Returns</li>
                            <li>📊 Admin Controls for Library Staff</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <h3 className="text-2xl md:text-3xl font-bold text-blue-300">Our Vision</h3>
                    <p className="text-gray-400 mt-4 max-w-4xl mx-auto px-4">
                        We envision a smart, digital-first library where books are easily accessible, transactions are smooth, and management is effortless.
                        Our platform, powered by the latest technologies, is designed for a scalable and efficient future.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default About;