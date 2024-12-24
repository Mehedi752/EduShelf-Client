import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://http://localhost:5000',
    withCredentials: true,
});

const useAxiosSecure = () => {
    const { signOutUser } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosInstance.interceptors.response.use(
            response => response,
            error => {
                if (error.response.status === 401) {
                    console.log('Unauthenticated');
                    signOutUser()
                        .then(() => {
                            navigate('/auth/login')
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
                return Promise.reject(error);
            }
        );
    }, [])

    return axiosInstance;
};

export default useAxiosSecure;