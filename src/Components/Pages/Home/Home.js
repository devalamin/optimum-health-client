import React from 'react';
import { useSetTitle } from '../../../hooks/useSetTitle';
import Diet from '../Diet/Diet';
import Seminer from '../Seminer/Seminer';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    useSetTitle('Home');
    return (
        <div>
            <Services></Services>
            <Banner></Banner>
            <Diet></Diet>
            <Seminer></Seminer>
        </div>
    );
};

export default Home;