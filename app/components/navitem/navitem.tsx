import Link from "next/link";

type NavItemProp = {
    href:string,
    children:React.ReactNode
}
export default function NavItem({href,children}:NavItemProp){
    return(
        <Link href={href} className="
            text-[1rem] text-vsnlight font-medium after:duration-[400ms]
            after:content-[''] after:block before:w-full after:h-[2px]
            after:bg-white after:rounded-[3px] after:scale-x-0 after:opacity-0
            hover:after:scale-x-100 hover:after:opacity-100 focus:after:opacity-100
            focus:after:scale-x-100 outline-none
        ">
            {children}
        </Link>
    )
}