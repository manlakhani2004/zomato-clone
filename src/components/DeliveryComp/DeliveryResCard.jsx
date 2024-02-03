import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ResCard({ data }) {
    const title = data.name.replaceAll(' ', '-');
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return (
        <>
            <Link to={`/Ahmedabad/order-food-online/${title}/order`} >
                <div className="hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl border border-gray-100  mb-4  ">
                    <div style={{ backgroundImage: `url(${data.image})` }}
                        className=" rounded-xl  relative flex mb-20 lg:mb-24 xl:mb-24 md:mb-28 sm:mb-32  mx-3 mt-4   flex-col w-[400px]  bg-cover h-[248px] 2xl:w-[330px]  xl:w-[290px]  xl:h-[230px] lg:w-[260px]   lg:h-[220px] md:w-[260px] sm:w-[250px]  justify-center flex-wrap">
                        {data.discount &&
                            <div className=" absolute bg-blue-600 px-2  bottom-[20px] text-white">{data.discount} %OFF</div>
                        }
                        <div className="absolute bottom-[-64px] xl:bottom-[-80px] lg:bottom-[-85px] md:bottom-[-90px] sm:bottom-[-100px] px-2" >
                            <div className="flex justify-between">
                                <h1 className=" text-lg">{data.name}</h1>
                                <p className=" bg-green-700 px-2 rounded-lg text-white py-[1px] flex items-center gap-1">{data.Delivery_Reviews}<span className=" text-xs"><FaStar /></span></p>
                            </div>
                            <div className="flex gap-24 mt-1  w-[248]">
                                <p>{(data.dishes.lenght < 30) ? (data.dishes) : `${(data.dishes.substring(0, 20))}...`}</p>
                                <p>{data.DeliveryTime} min</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ResCard;