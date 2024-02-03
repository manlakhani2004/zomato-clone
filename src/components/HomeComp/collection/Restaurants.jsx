
function Restaurant({data})
{      
    // console.log(data);
    return(
        <>
        <div className=" w-[290px] mb-3  2xl:w-[260px] xl:w-[300px] lg:w-[280px] md:w-[330px] ">
            <div>
                <img src={data.image} width={260} height={185} className=" rounded-md w-[300px]"/>
            </div>
            <div className=" text-start mt-2 flex flex-col gap-1">
                <h1 className=" text-gray-800 text-lg font-semibold">{data.name}</h1>
                <div className="flex gap-4">
                    <div className=" text-sm text-gray-700"><span className=" bg-green-700 py-[2px] text-white px-2 rounded-md">{data.DiningRate}</span> DINING</div>
                    <div className=" text-gray-700 text-sm"><span className=" bg-green-700 py-[2px] text-white px-2 rounded-md">{data.DeliveryRate}</span> DILIVERY</div>
                </div>
                <div className=" text-base text-gray-600">{(data.Dishes.length<30)?(data.Dishes):(`${data.Dishes.substring(0,30)}...`)}</div>
                <div className=" text-base text-gray-600">{data.location}</div>
            </div>
        </div>

        </>
    )
}


export default Restaurant;