import React from 'react';
import Swiper from 'swiper';
import Prev from '../Prev/Prev';
import Spec from '../Spec/Spec.jsx';
import Price from '../Price/Price';
import Entrance from '../Entrance/Entrance';

const Home = () => {
    return (
        <>
        <Swiper/>
        <Prev/>
        <Spec/>
        <Price/>
        <Entrance/>
        </>
    );
};

export default Home;