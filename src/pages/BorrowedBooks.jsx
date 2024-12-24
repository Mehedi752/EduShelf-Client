import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BorrowedBooks = () => {
    const borrowedBooks = useLoaderData();
    console.log(borrowedBooks);
    return (
        <div>
            
        </div>
    );
};

export default BorrowedBooks;