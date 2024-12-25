import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import Testimonials from '../components/Testimonials';
import Featured from '../components/Featured';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;