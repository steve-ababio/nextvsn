import { team } from "@/data/data";
import TeamCard from "../teamcard/teamcard";

export default function Team({showText}:{showText:boolean}){
    return (
        <div className="px-4 sm:px-20">
            <h1 className="text-slate-700 text-[20px] text-center">Meet the Innovators Behind <strong className="text-vsnblue">NEXTVSN TECH INNOVATION</strong></h1>
            <p className="max-w-[40rem] text-slate-600 text-center mx-auto my-10">
                Discover the talented professionals driving our success and shaping the future of system management.
                Our dedicated team is committed to delivering innovative solutions and exceptional service.
            </p>
            <div className="grid gap-x-4 gap-y-10 grid-cols-[repeat(auto-fit,minmax(min(100%,270px),1fr))] pt-12 mb-10">
                {
                    team.map(({image,name,position,role})=>(<TeamCard key={name} name={name} image={image} position={position} role={role}  />))
                }
                {showText && 
                    <div className="text-slate-600 md:col-span-2 flex flex-col place-self-center items-center">
                        <div className="w-[80%] xl:mx-auto">
                            <p className="mb-8">
                            At NEXTVSN TECH INNOVATION, our team is our greatest asset. Comprising industry experts,
                            seasoned developers, and visionary leaders, we work collaboratively to deliver cutting-edge
                            solutions that empower businesses.
                            </p>
                            <p className="mb-8">
                            Each member brings a wealth of knowledge and a passion for innovation, ensuring that our clients 
                            receive the best possible service. Together, we are dedicated to pushing the boundaries of what's
                            possible and helping our clients achieve their goals through technology and innovation
                            </p>
                            <button className="px-5 py-3 bg-vsn-btndeep rounded-[60px] w-fit ml-auto text-vsnlight">All team members</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}