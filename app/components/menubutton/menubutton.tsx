import { CgClose } from "react-icons/cg"
import { RxHamburgerMenu } from "react-icons/rx"

type MenuButtonProp = {
    showmobilemenu:boolean,
    toggleMobileMenu:()=>void
}
export default function MenuButton({showmobilemenu,toggleMobileMenu}:MenuButtonProp){
    return(
        <button className="md:hidden" aria-label="menu" onClick={toggleMobileMenu}>
            {showmobilemenu ? <CgClose size={30} />:<RxHamburgerMenu  size={30} color="white"/>}
        </button>
    )
}