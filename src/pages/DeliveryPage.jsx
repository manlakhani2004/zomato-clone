import { useEffect, useState } from "react";
import DeliveryAndDiningHeader from "../components/Headers/Delivery&DiningHeader";
import { useDispatch, useSelector } from "react-redux";
import { AddAllDeliveryResData } from "../features/Slices/DeliverySlice";
import ResCard from "../components/DeliveryComp/DeliveryResCard";
import Accordian from "../../src/components/HomeComp/Accordian"
import FoodList from "../components/DeliveryComp/FoodList";
import Topbrand from "../components/DeliveryComp/Topbrand";
import { BsFilterSquare } from "react-icons/bs";
import { MdOutlineDiscount } from "react-icons/md";
import { MdOutlineStarRate } from "react-icons/md";
import { FcClearFilters } from "react-icons/fc";
import Footer from "../components/common/footer";

function DeliveryPage() {
    const dispatch = useDispatch();
    const[ResData, setResData] = useState([]);

    const DeliveryResData = useSelector((state) => state.Delivery.DeliveryResData);
    // console.log(ResData);
    useEffect(() => {
        //for top of page and smooth
        window.scrollTo({ top: 0, behavior: 'smooth' })

        dispatch(AddAllDeliveryResData());
        setResData(DeliveryResData);
    }, [DeliveryResData]);
    // console.log(DeliveryResData);
    // console.log("state data",ResData)

    function RatingFilterHandler()
    {
        const filtered = ResData.filter((item)=>{
            return item.Delivery_Reviews >= 4.0
        })
        // console.log("rating filter",filtered);
        setResData(filtered);
    }

    function DiscountFilterHandler()
    {
        const filtered = ResData.filter((item)=>{
            if(item.discount)
                return item
            else
               return
        })
        // console.log("offer Discount:",filtered);
        setResData(filtered);
    }

    return (

        <div className="w-[450px] overflow-hidden mx-auto sm:w-[630px] md:w-[650px] lg:w-[950px] xl:w-[1050px] 2xl:w-[1150px]">
                <div>
                    <DeliveryAndDiningHeader />
                </div>
            <div>
                <FoodList />
            </div>
            <div>
                <Topbrand />
            </div>
            <h1 className="pl-2 text-start text-3xl font-semibold my-5 ">Delivery Restaurants in Ahmedabad, Gujarat, India</h1>
            <div className=" flex pl-2 mt-5 mb-3 gap-3  text-sm  sm:text-base md:text-lg">
                    <div className="flex items-center text-lg gap-2  py-1 px-2 rounded-md cursor-pointer"> <span className=" text-red-500"><BsFilterSquare /></span>Filters</div>
                    <div className="flex items-center gap-2 border-2 py-1 px-2 rounded-md cursor-pointer" onClick={RatingFilterHandler}> <span className=" text-red-500"><MdOutlineStarRate /></span>Rating:4.0+</div>
                    <div className="flex items-center gap-2 border-2 py-1 px-2 rounded-md cursor-pointer" onClick={DiscountFilterHandler}> <span className="text-red-500"><MdOutlineDiscount /></span>Discounts</div>
                    <div className="flex items-center gap-2  bg-slate-200 text-red-500   font-semibold border-2 py-1 px-2 rounded-md cursor-pointer" onClick={()=>setResData(DeliveryResData)} > <span ><FcClearFilters /></span>Clear All</div>
                </div>
            <div className="flex  w-[450px] mx-auto 2xl:w-[1100px] xl:w-[1000px] lg:w-[900px] md:w-[690px] sm:w-[600px] flex-wrap gap-4 mb-[30px]">
                {
                    (ResData.length > 0) ? (
                        ResData.map((res) => (
                            <ResCard key={res.id} data={res} />
                        ))) : (
                        <div>
                            Delivery Restaurants data not found
                        </div>
                    )
                }
            </div>
            <Accordian />
            <div>
            <Footer/>
            </div>
        </div>



    )
}

export default DeliveryPage;