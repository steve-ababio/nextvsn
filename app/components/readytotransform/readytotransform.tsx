import { IMAGE_BASE_PATH } from "@/constants/constants";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

export default function ReadyToTransform(){
    return(
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))]">
            <div className="bg-vsnblue py-20 px-[2rem] sm:px-[3rem] md:px-[5rem] lg:px-[4rem] h-[500px]">
                <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] mb-5">Ready to Transform Your Business</h1>
                <p className="mb-8">
                Partner with <strong className="text-vsnbluelight">NEXTVSN TECH INNOVATION</strong> today
                and experience the power of tailored system 
                management solutions. Our dedicated team is
                here to provide you with innovative tools and
                unwavering support, helping you achieve your
                business goals. Take the first step towards 
                enhanced efficiency and success
                </p>
                <button className="bg-vsn-btn text-white px-20 py-3 rounded-[60px] flex justify-center items-center ">
                Contact
                <BsArrowRight />
                </button>
            </div>
            <div className="relative h-[500px]">
                <Image src={`${IMAGE_BASE_PATH}/behindcomputer.jpg`} className="absolute object-cover object-left max-h-full" alt="" fill />
            </div>
        </div>
    )
}