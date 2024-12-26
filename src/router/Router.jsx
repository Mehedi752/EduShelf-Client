import {
    createBrowserRouter
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../auth/Register";
import Login from "../auth/Login";
import BookCategory from "../components/BookCategory";
import BookDetails from "../components/BookDetails";
import PrivateRoute from "../provider/PrivateRoute";
import BorrowedBooks from "../pages/BorrowedBooks";
import AllBooks from "../pages/AllBooks";
import UpdateBook from "../pages/UpdateBook";
import AddBooks from "../pages/AddBooks";
import ErrorPage from "../pages/ErrorPage";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/addBooks',
                element: <PrivateRoute><AddBooks></AddBooks></PrivateRoute>
            },
            {
                path: '/books',
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
            },
            {
                path: '/books/update/:id',
                element: <PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>,
            },
            {
                path: '/books/:category',
                element: <BookCategory></BookCategory>,
                loader: ({ params }) => fetch(`https://library-management-server-xi-six.vercel.app/books/${params.category}`)
            },
            {
                path: '/books/details/:id',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://library-management-server-xi-six.vercel.app/books/details/${params.id}`)
            },

            {
                path: '/borrowedBooks/:email',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
            }
        ]
    },
]);

export default Router;