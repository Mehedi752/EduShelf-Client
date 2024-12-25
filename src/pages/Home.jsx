import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import ExploreMore from '../components/ExploreMore';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <ExploreMore></ExploreMore> */}
            <Categories></Categories>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;