import { FaChevronRight } from "react-icons/fa6";
function LocalitesCard({location})
{
    return(
        <div className=" 2xl:w-[350px] xl:w-[314px] md:w-[200px] lg:w-[280px] sm:w-[270px] cursor-pointer w-[380px] ml-1 flex items-center justify-between border gap-2 rounded-md py-3 px-4  hover:shadow-md hover:shadow-gray-150  transition-all duration-200">
            <div className="flex flex-col gap-1 items-start">
                <p className=" 2xl:text-xl xl:text-lg md:text-lg lg:text-lg sm:text-base text-lg text-gray-800">{location.name}</p>
                <p className="2xl:text-base xl:text-base md:text-base lg:text-md sm:text-sm text-md font-light text-gray-950 ">{location.places} places</p>
            </div>
            <div>
                <FaChevronRight className=" text-xs font-light text-gray-500"/>
            </div>
        </div>
    )
}
export default LocalitesCard