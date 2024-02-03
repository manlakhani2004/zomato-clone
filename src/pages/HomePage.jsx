import React from "react";
import HomeHeader from '../components/Headers/HomeHeader'
import Collection from '../components/HomeComp/collection/Collection';
import Localites from '../components/HomeComp/Localites';
import GetAppAD from '../components/HomeComp/GetAppAD';
import Accordian from "../components/HomeComp/Accordian";
import DiningAndDineOutCard from "../components/HomeComp/Dining&DineoutCard";
import Footer from "../components/common/footer";

function HomePage() {
    return (
        <div className=" w-screen overflow-hidden">
          
            <HomeHeader />
            <div className=" 2xl:w-[1100px] xl:w-[1000px]  xl:mx-auto lg:w-[900px] sm:w-[600px] mx-auto md:w-[690px] ">
            <DiningAndDineOutCard/>
            <Collection />
            <Localites />
            <GetAppAD />
            <Accordian/>
            <Footer/>
            </div>
            
        </div>
    )

}

export default HomePage;