import { Link } from "react-router-dom";
import AuthenticateUser from "../common/AuthenticateUser";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function HomeNav() {
    const CartItem =  useSelector((state)=>state.Cart);
    const[Cart,setCart]= useState(0);
    useEffect(()=>{
        setCart(CartItem.CartItem.length);
    },[])
    // console.log(CartItem.CartItem.length);
    // console.log(Cart);
    return (
        <nav className=" 2xl:justify-around  xl:justify-around md:justify-between md:px-8 text-white flex mx-auto items-center justify-around text-xl pt-5">
            <div className="logo-section">
                <a href="#" className=" text-base">Get the App</a>
            </div>
            <div className=" 2xl:text-xl lg:text-xl sm:text-base  xl:text-xl md:text-lg text-base font-semibold flex gap-5 items-center ">
                <Link to={'/investor-relations'}><div className=" hidden  sm:inline-block lg:inline-block md:inline-block xl:inline-block 2xl:inline-block">Investor Relations</div></Link>
                <Link to={'partner-with-us'}><div className=" hidden sm:inline-block lg:inline-block md:inline-block xl:inline-block 2xl:inline-block">Add resaurant</div></Link>
                <AuthenticateUser />
                <Link to={'/cart'}>
                    <div className=" 2xl:text-xl lg:text-xl sm:text-base  xl:text-xl md:text-lg text-2xl mt-4 p-3 bg-slate-900 rounded-full">          
                     {
                        Cart !== 0 &&
                        <p className=" bg-green-500 py-1 px-2 font-semibold rounded-full text-white text-xs">{Cart}</p>
                     }
                        <FaCartShopping />
                    </div>
                </Link>
            </div>
        </nav>
    )

}

export default HomeNav;