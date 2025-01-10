import NavItem from "../navitem/navitem";

export default function Desktop(){
    return(
        <>
            <nav className="md:block hidden text-vsnlight basis-[100%]">
                <div className="flex gap-x-[29px] justify-center">
                    <NavItem href="/">Home</NavItem>
                    <NavItem href="/about">About us</NavItem>
                    <NavItem href="/services">Services</NavItem>
                    <NavItem href="/contact">Contact</NavItem>
                </div>
                
            </nav>
            <div className="basis-[100%] hidden md:flex justify-end">
                <button className="rounded-[50px] text-vsnlight bg-vsn-btn px-[20px] py-[10px]">Book now</button>
            </div>
        </>
    )
}