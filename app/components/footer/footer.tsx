import { IoLogoFacebook, IoLogoInstagram, IoLogoYoutube } from "react-icons/io5";
import RoundedIcon from "../roundedicon/roundedicon";
import { FaXTwitter } from "react-icons/fa6";
import NavItem from "../navitem/navitem";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_BASE_PATH } from "@/constants/constants";

export default function Footer(){
    return(
        <footer className="bg-vsn-btndeep">
            <div>
                <div className="grid [@media(min-width:532px)]:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] text-[14px] place-content-center gap-y-9 gap-x-5 sm:px-8 px-14 py-12">
                    <div className="max-w-[12rem]">
                    <div className="basis-[100%] mb-4 flex justify-start">
                        <Link href="/"><Image height={60} width={250} className="object-contain" alt="next vision logo" src={`${IMAGE_BASE_PATH}/logo.png`} /></Link>
                    </div>
                        <div className="mb-6">Empowering your business with innovative solutions and exceptional support</div>
                        <div className="flex gap-x-2">
                            <RoundedIcon Icon={IoLogoFacebook} />
                            <RoundedIcon Icon={FaXTwitter} />
                            <RoundedIcon Icon={IoLogoInstagram} />
                            <RoundedIcon Icon={IoLogoYoutube} />
                        </div>
                    </div>
                    <div className="w-[max-content]">
                        <h1 className="mb-4 font-bold">Quick Links</h1>
                        <nav>
                            <Link className="mb-3 block" href="/">Home</Link>
                            <Link className="mb-3 block" href="/aboutus">About us</Link>
                            <Link className="mb-3 block" href="/services">Services</Link>
                            <Link className="mb-3 block" href="/contact">Contact</Link>
                        </nav>
                    </div>
                    <div className="w-[max-content]">
                        <h1 className="mb-4 font-bold">Services</h1>
                        <div>
                            <div className="mb-3">School management systems</div>
                            <div className="mb-3">Hospital management systems</div>
                            <div className="mb-3">Corporate management systems</div>
                            <div className="mb-3">Retail management systems</div>
                        </div>
                    </div>
                    <div className="w-[max-content]">
                        <h1 className="mb-4 font-bold">Contact Details</h1>
                        <div>
                            <div className="mb-3"><span className="text-vsnbluelight">Location: </span>East Legon, Grand</div>
                            <div className="mb-3">
                                <span className="text-vsnbluelight">Time & Days: </span>8 AM - 5 PM,
                                <div>Monday - Friday</div>
                             </div>
                            <div className="mb-3"><span className="text-vsnbluelight">Telephone: </span>(+233) 553276545</div>
                        </div>
                    </div>
                    <div className="max-w-[12rem]">
                        <p>
                            <span className="text-vsnbluelight">NEXTVSN TECH INNOVATION</span> is dedicated to providing 
                            customized system management solutions that drive business success. Our innovative approach and
                            exceptional support ensure that your operations are efficient, scalable, and tailored to your 
                            unique needs.
                        </p>
                    </div>
                </div>
                <div className="w-full bg-gray-500 h-[1px] my-3"></div>
                <div className="text-center py-6 px-10 text-[0.88rem] sm:text-[1rem]">Copyright {new Date().getFullYear()} Nextvsn Tech Innovations | All Right Reserved</div>
            </div>
        </footer>
    )
}