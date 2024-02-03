import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAllCollection, AddCollection } from "../../../features/Slices/CollectionSlice";
import CollectionCard from "./CollectionCard";
import { FaCaretRight } from "react-icons/fa";

function Collection() {
    const dispatch = useDispatch();
    const[Allcollectiones, setAllcollectiones] = useState([]);

    const [showCollection,setShowCollection] = useState(false);

    const { collectiones } = useSelector((state) => state.Collection);
    useEffect(() => {
        dispatch(AddCollection());
        // setAllcollectiones(collectiones);
    }, []);
    // console.log(Allcollectiones);
    // console.log(collectiones);
    function AllCollectionRender()
    {
        dispatch(AddAllCollection());
        setShowCollection(true);
    }

    return (
        <div className="2xl:w-[1100px] xl:w-[1000px] md:w-[690px] lg:w-[900px] sm:w-[600px] w-[395px] mx-auto mt-10">
            <div>
                <h1 className=" 2xl:text-4xl xl:text-4xl md:text-2xl lg:text-3xl sm:text-2xl text-start text-2xl">Collections</h1>
                <div className="2xl:justify-start xl:justify-start lg:justify-start lg:gap-4  gap-0 flex items-center justify-start mb-7 mt-2">
                <p className=" 2xl:text-xl xl:text-lg  md:text-base lg:text-lg sm:text-base text-start text-md font-light   text-black  w-[70%]">Explore curated lists of top restaurants, cafes, pubs, and bars in Ahmedabad, based on trends  </p>
                {!showCollection &&
                    <span className=" 2xl:text-lg xl:text-lg md:text-base lg:text-base sm:text-base text-red-500 text-sm font-normal  flex items-center cursor-pointer" onClick={AllCollectionRender} >All collection in Ahmedabad<FaCaretRight/></span>
                }
                </div>
            </div>

            <div className="sm:justify-center lg:justify-center md:justify-center  flex gap-1 ml-2  sm:gap-3 md:gap-3 lg:gap-4 xl:gap-4 2xl:gap-4 flex-wrap">

                {
                    (collectiones.length > 0) ? (
                        collectiones.map((item) => (
                            <div key={item.id}>
                                <CollectionCard data={item} />
                            </div>
                        ))
                    ) : (
                        <div>
                            Collection not found
                        </div>
                    )
                }
            </div>
        </div>
    )
}
export default Collection;