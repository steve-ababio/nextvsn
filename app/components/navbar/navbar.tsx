"use client"
import { IMAGE_BASE_PATH } from "@/constants/constants";
import Image from "next/image";
import NavItem from "@/app/components/navitem/navitem";
import Link from "next/link";
import { useState } from "react";
import Mobile from "../mobilemenu/mobilemenu";
import Desktop from "../desktopmenu/desktopmenu";
import { CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import MenuButton from "../menubutton/menubutton";

export default function NavBar(){
    const [showmobilemenu,setShowMobileMenu] = useState(false);
    
    function toggleMobileMenu(){
        setShowMobileMenu(!showmobilemenu);
    }
    function closeMobileMenu(){
        setShowMobileMenu(false);
    }
    return(
        <header className="w-full py-5 h-[80px]">
            <div className="flex items-center  pr-4 md:px-10">
                <div className="basis-[100%] flex justify-start">
                    <Link href="/"><Image height={50} width={250} className="object-contain" alt="next vision logo" src={`${IMAGE_BASE_PATH}/logo.png`} /></Link>
                </div>
                <div className="basis-[100%] md:hidden mr-3 flex justify-end">
                    <button className="rounded-[50px] text-vsnlight bg-vsn-btn px-[20px] py-[10px]">Book now</button>
                </div>
                <MenuButton showmobilemenu={showmobilemenu} toggleMobileMenu={toggleMobileMenu} />
                <Desktop />
                {showmobilemenu && <Mobile showmobile={showmobilemenu} closeMobileMenu={closeMobileMenu} />}
                
            </div>
        </header>
    )
}