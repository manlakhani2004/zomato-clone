import { CiSearch } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import AuthenticateUser from "../common/AuthenticateUser";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchHome from "../HomeComp/SearchHome";
import { useSelector } from "react-redux";

function CollectionNav() {
    const [SearchQuery,setSearchQuery] = useState(''); 
    const CartItem =  useSelector((state)=>state.Cart);
    const[Cart,setCart]= useState(0);
    useEffect(()=>{
        setCart(CartItem.CartItem.length);
    },[])
    return (
        <div className=" w-full ">
            <div className="flex  items-center  mx-auto justify-between  py-3 ">
                <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png " width={124} height={26} className=" 2xl:w-[124px] xl:w-[124px] lg:w-[115px]"/>
                <div className="flex  items-center bg-white py-2  rounded-lg px-6  sm:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_9px] md:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_9px] lg:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_9px] xl:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_9px] 2xl:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_9px] ">
                    <div className=" items-center w-max hidden sm:inline-block md:inline-block lg:inline-block xl:inline-block 2xl:inline-block">
                        <div className="flex gap-2 items-center">
                        <span className=" text-red-400 text-2xl pr-2"><FaLocationDot /></span>
                        <input type="text" placeholder="Ahmedabad" className="bg-white py-2 border-none outline-none" />
                        </div>
                    </div>

                    <div className="mx-4 text-slate-400 hidden  lg:inline-block  xl:inline-block 2xl:inline-block">|</div>

                    <div className=" items-center w-[65%] hidden lg:inline-block  xl:inline-block 2xl:inline-block">
                        <div className="flex items-center gap-2" >
                        <span className="text-2xl pr-2 text-slate-500"><CiSearch /></span>
                        <input type="text" name="SearchQuery" onChange={(event)=>setSearchQuery(event.target.value)} className="bg-white py-2 border-none outline-none w-full" placeholder="Search for restaurant, cuisine or a dish" />
                        </div>
                    </div>
                </div>
                <AuthenticateUser />
                <Link to={'/cart'}>
                    <div className=" text-2xl mt-4 p-3  bg-slate-100 rounded-full">
                    {
                        Cart !== 0 &&
                        <p className=" bg-green-500 py-1 px-2 font-semibold rounded-full text-white text-xs">{Cart}</p>
                     }
                        <FaCartShopping />
                    </div>
                </Link>
            </div>
            <div className=" absolute  left-[-20px]  top-[-257px]">
                <SearchHome query={SearchQuery}/>
            </div>
        </div>
    )

}

export default CollectionNav;