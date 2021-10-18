import React from 'react';
import Banner from '../Banner/Banner';
import './home.css';
// import Sidebar from '../../components/sidebar/Sidebar';
// import Feed from '../../components/feed/Feed';
// import Rightbar from '../../components/rightbar/Rightbar';

const Home = () => {
    return (
        <>
            <div className="">
                <div className="homeContainer">
                    <Banner/>
                    {/* <Sidebar/>
                    <Feed/>
                    <Rightbar/> */}
                </div>
            </div>
        </>
    );
};

export default Home;