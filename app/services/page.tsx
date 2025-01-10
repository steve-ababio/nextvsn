import Image from "next/image";
import ServicesHome from "./components/home/home";
import { IMAGE_BASE_PATH } from "@/constants/constants";
import { services, whatwedo } from "@/data/data";
import ServiceCard from "../components/servicecard/servicecard";
import { BiArrowToBottom, BiArrowToRight } from "react-icons/bi";
import ReadyToTransform from "../components/readytotransform/readytotransform";

export default function Services(){

    return(
        <main className="min-h-screen">
            <ServicesHome />
            <section className="py-[60px] px-5 md:px-20 bg-white text-slate-700">
                <div>
                    <h1 className="text-[26px] text-center">What We Offer</h1>
                    <p className="text-center mt-10">NEXTVSN TECH INNOVATION provides a variety of management systems tailored to meet the unique needs of different industries. Our solutions are designed to enhance efficiency, productivity, and overall business success.</p>
                    <div className="mt-14 grid place-content-center grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-y-[20px] gap-x-[100px]">
                        <div className="relative h-[280px] rounded-[8px]">
                            <Image src={`${IMAGE_BASE_PATH}/whatweare2.png`} fill className="rounded-[8px] absolute w-full right-0" alt="" />
                        </div>
                        <div>
                            <div>
                                <p>
                                    Our offerings are designed to enhance operational efficiency, streamline processes, 
                                    and foster growth. From educational institutions to healthcare facilities, corporate 
                                    environments to non-profits, our solutions are crafted to address specific challenges
                                    and drive success. 
                                </p>
                                <p>
                                    With a focus on innovation, scalability, and user-friendliness, our systems integrate
                                    seamlessly into your existing workflows, ensuring a smooth transition and immediate impact. 
                                    Trust us to provide the tools and support you need to achieve your business objectives
                                    and stay ahead in an ever-evolving digital landscape.
                                </p>
                            </div>
                            <div className="text-center sm:text-start w-full mt-5">
                                <button className="bg-vsn-btndeep text-white px-20 rounded-[60px] py-[10px]">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className=" text-vsnlight bg-vsnblue">
            <div className="px-6 md:px-14 lg:px-20 py-20">
                <div>
                    <div className="basis-full text-center">
                        <h2 className="uppercase pb-3 font-bold text-[25px]">Our specialized services</h2>
                        <p className="leading-vsn26 max-w-[800px] mx-auto w-[90%]">
                            Discover how our tailored solutions can transform your operations across various sectors.
                            Each service is designed to address specific challenges and drive your success.
                        </p>
                    </div>
                    </div>
                    <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] pt-12">
                    {
                        services.map(({image,title,body})=>(<ServiceCard key={title} image={image} title={title} body={body}  />))
                    }
                    </div>
                </div>
            </section>
            <section className="py-[60px] px-5 md:px-20 bg-white text-slate-700">
                <div>
                    <h1 className="text-[26px] text-center md:text-start">Why choose us?</h1>
                    <p className="mt-4 max-w-[35rem] w-[100%] mx-auto md:mx-0 text-center md:text-start text-vsnblue">Our solutions are designed to be comprehensive, scalable, and user-friendly, providing you with the tools needed to succeed.</p>
                    <div className="mt-14 grid place-content-center grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-y-[20px] gap-x-[100px]">
                        <div className="relative h-[300px] md:h-[450px] rounded-[20px]">
                            <Image src={`${IMAGE_BASE_PATH}/chooseus.png`} fill className="absolute w-full right-0" alt="" />
                        </div>
                        <div className="bg-vsnblue rounded-[16px] py-20 px-8">
                            {
                                whatwedo.map(({title,body},idx)=>{
                                    const iseven = idx%2 == 0;
                                    return(
                                        <div key={idx} className="mb-6 flex items-center">
                                            <div className={`h-6 w-6 mr-3 shrink-0 flex items-center justify-center rounded-[50%] bg-transparent text-center border-2 ${iseven ? 'border-[#37c3ff]':'border-white'} `}>
                                                {iseven ? <BiArrowToBottom className="inline" size={15} color="#37c3ff"/>:<BiArrowToRight size={15} className="inline" color="white"/>}
                                            </div>
                                            <div className="ml-2">
                                                <span className="inline mr-2 text-vsnbluelight">{title}:</span>
                                                <span className="inline text-white">{body}</span>
                                            </div>
                                        </div>
                                    )
                            })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <div className="mb-20">
                <ReadyToTransform />
            </div>
            
        </main>
    )
}