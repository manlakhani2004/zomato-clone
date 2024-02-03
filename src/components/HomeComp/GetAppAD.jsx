import { useState } from "react";

function GetAppAD() {
    const [isEmail, setIsEmail] = useState(true);

    return (
        <div className="w-full bg-[#fffbf7]  mt-24 py-16">
            <div className=" 2xl:w-[1100px] xl:w-[1000px] md:w-[690px] lg:w-[850px] ml-2 sm:w-[600px] flex w-[400px] flex-col md:flex-row  lg:flex-row xl:flex-row 2xl:flex-row gap-10 items-center mx-auto justify-center">
                <div>
                    <img src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" width={250} height={450} className=" 2xl:w-[250px] xl:w-[240px] lg:w-[220px] md:w-[200px] sm:w-[190px]"/>
                </div>


                <div className="flex flex-col items-start gap-4 ">
                    <h1 className=" 2xl:text-5xl xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-3xl font-semibold">Get the Zomato app</h1>
                    <p className=" 2xl:text-lg xl:text-base md:text-base text-base font-light hidden sm:inline-block md:inline-block lg:inline-block xl:inline-block 2xl:inline-block">We will send you a link, open it on your phone to download  the app</p>
                    <div className="flex gap-3">


                            <div className="cursor-pointer">
                               
                                <label className="text-lg flex items-center ">
                                    <input type="radio" id="send" name="sendmessage" className="mr-1 h-4 w-4 "   onChange={() => setIsEmail(true)} checked = {isEmail} />
                                    Email
                                </label>
                            </div>
                        


                        <div className="cursor-pointer">
                            <label className="text-lg flex items-center">
                                <input type="radio" id="send" name="sendmessage" className="mr-1 h-4 w-4 " onChange={() => setIsEmail(false)} />
                                Phone
                            </label>
                        </div>
                      
                    </div>
                      

                    <div>
                    {
                             isEmail &&
                        <input type="email" className="2xl:py-3 xl:py-3 md:py-2 lg:py-3 sm:py-2 py-2 w-[200px] sm:w-[230px] md:w-[250px] lg:w-[270px] xl:w-[280px] 2xl:w-[300px]  px-4 border rounded-md " placeholder="Email" />
                    }
                    {
                        !isEmail &&
                        <input type="phone" className="2xl:py-3 xl:py-3 md:py-2 py-2 lg:py-3 sm:py-2   w-[200px] sm:w-[230px] md:w-[250px] lg:w-[270px] xl:w-[280px] 2xl:w-[300px] px-4 border rounded-md " placeholder="Phone Number" />
                    }
                        <button className="2xl:py-3 xl:py-3 md:py-2 lg:py-3 sm:py-2 md:text-md bg-red-500 py-2 ml-2 hover:bg-red-600 transition-all duration-300 text-white px-3 rounded-md" >Share App Link</button>
                   
                    </div>
                    <p className=" text-gray-400">Download app from</p>
                    <div className="flex gap-3">
                        <img alt="image" width={140} src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" loading="lazy" className="sc-s1isp7-5 fyZwWD" />
                        <img alt="image" width={140} src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" loading="lazy"  className="sc-s1isp7-5 fyZwWD"/>
                    </div>


                </div>
            </div>
        </div>
    )

}

export default GetAppAD;