import NavBar from "@/app/components/navbar/navbar";
import SpiralImages from "@/app/components/spiralimages/spiralimages";
import HeroText from "@/app/components/herotext/herotext";
import DashboardImages from "@/app/components/dashboardimages/dashboardimages";
import Image from "next/image";
import { IMAGE_BASE_PATH } from "@/constants/constants";
export default function Home(){
    return(
        <div className="min-h-[calc(100vh+100px)] w-full bg-no-repeat">
            <NavBar />
            <HeroText />
            <DashboardImages />
            <SpiralImages />
            <Image src={`${IMAGE_BASE_PATH}/bg.png`} fill alt="" className="block absolute min-h-[calc(100vh+100px)] -z-10 inset-0" />
        </div>
    )
}