import { FaCaretRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function CollectionCard({data})
{

    return(
        <Link to={`/Ahmedabad/${data?.name.replaceAll(" ","-")}`}>
        <div>
            <div className=" 2xl:w-[260px] 2xl:h-[290px] xl:w-[234px] xl:h-[280px] md:w-[250px] md:h-[250px] lg:w-[200px] lg:h-[260px] sm:w-[210px] sm:h-[240px] w-[190px]  h-[240px] relative collection-card hover:translate-y-1 transition-all duration-200 " >
                <img src={data.image} width={260} className=" h-full rounded-md"  alt="image not found"/>
                <p className=" 2xl:text-lg xl:text-base lg:text-base absolute bottom-8 font-semibold text-lg text-white left-2">{data.name}</p>
                <p className=" absolute bottom-2 left-2 text-white flex items-center justify-center">{data.places} Places <FaCaretRight/></p> 
            </div>
        </div>
        </Link>
    )
}
export default CollectionCard;