import { useRef } from "react";
import NavItem from "../navitem/navitem";

interface MobileMenuProps {
    closeMobileMenu:()=>void;
    showmobile:boolean
}
export default function Mobile({closeMobileMenu,showmobile}:MobileMenuProps){
    const menu = useRef<HTMLDivElement>(null)
    if(showmobile && menu.current){
        menu.current.inert = false;
    }else if(!showmobile && menu.current){
        menu.current.inert = true;
    }

    return(
        <nav ref={menu} aria-hidden={showmobile} aria-expanded={showmobile} className={` 
                h-[calc(100%-80px)] bg-vsn-btndeep before:block before:content-['']
                before:h-20 before:w-full before:bg-[linear-gradient(to_top,#022E8A,transparent)] 
                before:left-0 text-slate-600 duration-300 origin-top before:pointer-events-none 
                 z-[1000] fixed inset-0 top-[80px] before:absolute before:-top-16`}>
            <div className="h-full w-full flex flex-col items-center gap-y-14 py-10 ">
                <NavItem href="/" >
                    <div onClick={closeMobileMenu}>Home</div>
                </NavItem>
                <NavItem  href="/about" >
                    <span>About us</span>
                </NavItem>
                <NavItem href="/services" >
                    <div onClick={closeMobileMenu}>Services</div>
                </NavItem>
                <NavItem  href="/contactus">
                    <span>Contactus</span>
                </NavItem>
            </div>
            <div className="basis-[100%] flex justify-end">
                <button className="rounded-[50px] text-vsnlight bg-vsn-btn px-[20px] py-[10px]">Book now</button>
            </div>
        </nav>
    )
}