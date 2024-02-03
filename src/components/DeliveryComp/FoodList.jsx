import { useEffect, useState } from "react"
import { Foodlist } from "../../Data/FoodList";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function FoodList() {
    const [foods, SetFoods] = useState([]);
    useEffect(() => {
        SetFoods(Foodlist);
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className=" 2xl:w-[1100px] xl:w-[1000px] lg:w-[900px] md:w-[600px] sm:w-[580px] w-[400px] mx-auto  gap-2 ">
            <h1 className=" font-semibold text-3xl text-start py-8 text-gray-800">Eat what makes you happy</h1>
            <div>

                {
                    (foods.length > 0) ? (
                        <Slider {...settings}>
                            {
                                foods.map((food) => (
                                    <Link to={`/Ahmedabad/order-food-online/${food.RestaurantRelated.replaceAll(" ","-")}/order`} key={food.id}>
                                    <div  className=" flex flex-col ml-3  justify-center items-center gap-2  ">
                                        <div className=" w-[166px]">
                                            <img className=" rounded-full w-[150px] h-[150px] " src={food.image} width={150} />
                                        </div>
                                        <p className=" font-semibold text-lg text-gray-600">{food.name}</p>
                                    </div>
                                    </Link>
                                ))
                            }
                        </Slider>

                    ) : (
                        <div>
                            Food not found
                        </div>
                    )
                }


            </div>
        </div>
    )
}

export default FoodList;


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#ff6666" , borderRadius:"100%", color:"white", paddingTop:"10px", paddingBottom:"8px", paddingInline:"9px",border:"4px solid #ff6666", display:"flex", alignItems:"center",justifyContent:"center"}}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "#ff6666" , borderRadius:"100%", color:"white", paddingTop:"10px", paddingBottom:"8px", paddingInline:"9px",border:"4px solid #ff6666", display:"flex", alignItems:"center",justifyContent:"center"}}
            onClick={onClick}
        />
    );
}