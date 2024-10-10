import { IMAGE_BASE_PATH } from "@/constants/constants";
export default function SpiralImages(){
    return(
        <div className="flex justify-between absolute w-full h-screen top-0 pointer-events-none items-start overflow-hidden">
            <img src={`${IMAGE_BASE_PATH}/spiral-Chaos-left.svg`} alt=""/>
            <img src={`${IMAGE_BASE_PATH}/spiral-Chaos-right.svg`} alt=""/>
        </div>
    )
}