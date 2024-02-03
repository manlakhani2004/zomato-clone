import { Link } from "react-router-dom";

function DiningAndDineOutCard() {
    return (
        <div className=" 2xl:w-[1100px] xl:w-[1000px] md:w-[690px] lg:w-[900px] sm:w-[600px]  flex w-[400px] gap-4 mx-auto flex-col md:flex-row   lg:flex-row xl:flex-row 2xl:flex-row mt-9">
            <Link to={'/Ahmedabad/order-food-online'}>
            <div className=" 2xl:w-[535px] 2xl:h-[250px] xl:w-[520px] xl:h-[230px] md:w-[314px] lg:w-[430px] lg:h-[220px] sm:w-[550px]  relative  rounded-xl h-[230px] border  w-[350px] ml-8 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0   bg-no-repeat bg-cover hover:scale-105 hover:transition-all hover:duration-300  bg-center  bg-[url('https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*')]">
                <div className="absolute  bottom-[0px] bg-white w-full py-4 px-5 text-start">
                    <h1 className=" text-xl font-semibold">Order Online</h1>
                    <p className=" text-gray-700">Stay home and order to your doorstep</p>
                </div>
            </div>
            </Link>

            <Link to={'/Ahmedabad/dine-out'}>
            <div className="2xl:w-[535px] 2xl:h-[250px] xl:w-[520px] xl:h-[230px] md:w-[320px] lg:w-[430px] lg:h-[220px] sm:w-[550px]   h-[230px] w-[350px] rounded-xl ml-8 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0 2xl:ml-0  border hover:scale-105 hover:transition-all hover:duration-300  relative bg-no-repeat bg-cover bg-center bg-[url('https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around|402:360&crop=402:360;*,*')]">
                <div className=" bottom-[0px] absolute bg-white  w-full py-4 px-5 text-start">
                    <h1 className=" text-xl font-semibold">Dining</h1>
                    <p className=" text-gray-700">View the city's fovorurite dining venues</p>
                </div>
            </div>
            </Link>

        </div>

    )
}

export default DiningAndDineOutCard;