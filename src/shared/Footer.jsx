import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#d1f7c4] py-10'>
            <div className="container mx-auto px-4">
              
                <div className="flex flex-col lg:flex-row justify-between">

                    {/* About Section */}
                    <div className='w-full lg:w-[30%]'>
                        <h2 className="text-xl font-semibold mb-4">About Us</h2>
                        <p className="text-sm">
                            Welcome to our EduShelf Website. We aim to provide a seamless experience for managing and accessing books, ensuring an enriching journey of knowledge and education.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className='w-full lg:w-[20%]'>
                        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="/all-books" className="hover:underline">All Books</a>
                            </li>
                            <li>
                                <a href="/add-book" className="hover:underline">Add Book</a>
                            </li>
                            <li>
                                <a href="/borrowed-books" className="hover:underline">Borrowed Books</a>
                            </li>
                        </ul>
                    </div>
                    {/* Contact Section */}
                    <div className='w-full lg:w-[30%]'>
                        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-sm">
                            <strong>Email:</strong> eduShelf@school.com<br />
                            <strong>Phone:</strong> +1 234 567 890<br />
                            <strong>Address:</strong> 123 Library Lane, Knowledge City
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-600 mt-8 pt-4 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} EduShelf. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;