import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddLocalities, AllAddLocalities } from "../../features/Slices/LocalitiesSlice";
import LocalitesCard from "./LocalitesCard";
import { FaAngleDown } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

function Localites() {
    const dispatch = useDispatch();
    const [showMore, setShowMore] = useState(false);

    useEffect(() => {
        dispatch(AddLocalities());
    }, []);
    const { localities } = useSelector((state) => state.Localities);
    // console.log(localities);

    function seeMoreHandler()
    {
        dispatch(AllAddLocalities());
        setShowMore(true);
    }

    function ShowLessHandler()
    {
        dispatch(AddLocalities());
        setShowMore((prev)=>!prev);
    }

    return (
        <div className="2xl:w-[1100px] xl:w-[1000px] md:w-[690px]  lg:w-[900px] sm:w-[600px] w-[400px] mx-auto mt-[4rem] ">
            <div className=" 2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-start text-2xl text-gray-800 ml-2">Popular localities in and around <span className=" font-semibold">Ahmedabad</span></div>
            {
                (localities.length > 0) ? (
                    <div className="flex flex-wrap gap-3 mt-8">
                        {
                            localities.map((location) => (
                                <Link key={location.id}  to={'/Ahmedabad/order-food-online'}>
                                <LocalitesCard location={location} />
                                </Link>
                            ))
                        }
                        <div>
                            {
                                !showMore &&
                                <div className=" 2xl:w-[356px] xl:w-[324px] md:w-[220px] lg:w-[290px] sm:w-[270px] flex gap-2 border py-7 px-[125px] rounded-md justify-center items-center cursor-pointer" onClick={seeMoreHandler}>
                                    <p className=" 2xl:text-xl xl:text-lg md:text-lg lg:text-lg sm:text-base text-xl text-gray-800">SeeMore</p>
                                    <FaAngleDown className="text-lg font-light text-gray-500" />
                                </div>
                            }
                            {
                                showMore &&
                                <div className=" 2xl:w-[356px] xl:w-[324px] md:w-[220px] lg:w-[290px] sm:w-[270px] flex gap-2 border py-7 px-[125px] rounded-md justify-center items-center cursor-pointer" onClick={()=>dispatch(AddLocalities())}>
                                    <p className=" 2xl:text-xl xl:text-lg md:text-lg lg:text-lg sm:text-base text-xl text-gray-800" onClick={ShowLessHandler}>ShowLess</p>
                                    <IoIosArrowUp className="text-lg font-light text-gray-500"/>
                                </div>
                            }
                        </div>
                    </div>
                ) : (
                    <div>Localites Not Found</div>
                )
            }

        </div>
    )

}

export default Localites;