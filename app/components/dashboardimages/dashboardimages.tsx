import { IMAGE_BASE_PATH } from "@/constants/constants";

export default function DashboardImages(){
    return(
        <div className="flex justify-between px-8 pt-24">
            <div className="hidden w-[300px] sm:w-[500px] lg:block absolute left-[80px] lg:-bottom-[100px] ">
                <img src={`${IMAGE_BASE_PATH}/dashboard3.svg`} />
            </div>
            <div className="grow absolute w-[300px] sm:w-[500px] left-[50%] -bottom-[200px] sm:-bottom-[120px] md:-bottom-[150px] lg:-bottom-[200px] -translate-x-1/2 z-10">
                <img src={`${IMAGE_BASE_PATH}/dashboard1.svg`} />
            </div>
            <div className="hidden w-[300px] sm:w-[500px] lg:block absolute right-[80px] lg:-bottom-[100px] ">
                <img src={`${IMAGE_BASE_PATH}/dashboard2.svg`} />
            </div>
        </div>
    )
}