import HomeNav from "../Navbars/HomeNav";
import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import SearchHome from "../HomeComp/SearchHome";
import { useState } from "react";
function HomeHeader() {
    const [searchItem, setSearchItem] = useState('');
    function searchHandler(event) {
        setSearchItem(event.target.value);

    }
    return (
        <>
            <div className="Home-head xl:min-w-full lg:min-w-full  h-[441px]  mx-auto  bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')] bg-no-repeat bg-cover  ">
                <HomeNav />
                <div className="flex flex-col gap-7 items-center mt-14">
                    <img src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png" width={300} className=" lg:w-[250px] md:w-[240px] 2xl:w-[300px] xl:w-[280px] sm:w-[240px] w-[205px]" />
                    <p className=" sm:text-[1.6rem] 2xl:text-[2.3rem] xl:text-[2rem] lg:text-[1.7rem] md:text-[1.8rem] text-white text-[1.5rem] ">Discover the best food & drinks in Ahmedabad</p>

                    <div className="flex  items-center  bg-white py-2  rounded-lg px-6 w-[50%]">
                        <div className=" 2xl:inline-block xl:inline-block lg:inline-block   items-center">
                            <div className="flex items-center">
                                <div className=" text-red-400 text-2xl pr-2"><FaLocationDot /></div>
                                <input type="text" placeholder="Ahmedabad" className="bg-white w-[55%] py-2  border-none outline-none" />
                            </div>
                        </div>

                        <div className="hidden 2xl:inline-block xl:inline-block lg:inline-block    mx-4 text-slate-400">|</div>

                        <div className="hidden 2xl:inline-block xl:inline-block lg:inline-block   md:w-[100%]  items-center w-[100%]">
                            <div className="flex items-center">
                                <span className="text-2xl pr-2 text-slate-500"><CiSearch /></span>
                                <input type="text" name="searchquery" onChange={searchHandler} className="bg-white py-2 border-none outline-none w-full" placeholder="Search for restaurant, cuisine or a dish" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <SearchHome query={searchItem} />
            </div>
        </>
    )

}
export default HomeHeader;