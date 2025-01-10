import Image from "next/image";
import AboutHome from "./components/home/home";
import { IMAGE_BASE_PATH } from "@/constants/constants";
import { clientcomments, values } from "@/data/data";
import Team from "../components/team/team";
import ReadyToTransform from "../components/readytotransform/readytotransform";

export default function About(){
    return(
        <main className="min-h-screen">
            <AboutHome />
            <section>
                <div className=" text-slate-600 pt-12">
                    <h1 className="text-[1.25rem] text-center font-bold mb-8">Who we are</h1>
                    <div className="grid place-content-center px-5 md:px-20 grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-y-[50px] gap-x-[100px]">
                        <div className=" text-[18px] md:text-[24px]">
                            <p className="mb-8">
                                At <strong className="text-vsnblue">NEXTVSN TECH INNOVATION</strong>, 
                                we are more than just a provider of management solutions; we are architects of transformative
                                business success. With a passion for innovation and a commitment 
                                to excellence, we specialize in crafting customized systems that 
                                empower organizations to thrive in an ever-evolving digital landscape.
                            </p>
                            <div className="text-center sm:text-start">
                                <button className="px-20 py-2 rounded-[40px] bg-vsn-btndeep text-vsnlight">Read More</button>
                            </div>
                        </div>
                        <div className="text-[16px]">
                            <p className="mb-6">
                                Our journey is defined by a relentless pursuit of efficiency, scalability,
                                and tailored solutions. Whether you're navigating the complexities of education,
                                healthcare, corporate environments, or non-profit sectors, we deliver robust systems
                                that streamline operations, enhance productivity, and amplify impact.
                            </p>
                            <p className="mb-6">
                                Backed by a team of seasoned professionals, each driven by a shared vision of redefining
                                industry standards, we stand as a trusted partner in your quest for operational excellence.
                                From concept to execution, we prioritize collaboration, agility, and unwavering support,
                                ensuring your organization not only adapts but thrives in the face of chang
                            </p>
                            <p className="mb-6">
                                Discover how NEXTVSN TECH INNOVATION can elevate your business operations and propel your vision
                                forward. Join us in embracing innovation, harnessing technology, and shaping a future where your
                                organization leads with confidence and purpose.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[350px] md:mx-20">
                        <Image src={`${IMAGE_BASE_PATH}/whoweare.jpg`} width={500} height={350} className="absolute right-0" alt="" />
                    </div>
                </div>
            </section>
            <section className="text-white px-5 md:px-20 py-[60px] bg-vsnblue">
                <div>
                    <h1 className="text-[26px]">Our Mission</h1>
                    <div className="mt-6 grid place-content-center grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-y-[20px] gap-x-[100px]">
                        <div>
                            <p>
                                Our journey is defined by a relentless pursuit of efficiency, scalability,
                                and tailored solutions. Whether you're navigating the complexities of education,
                                healthcare, corporate environments, or non-profit sectors, we deliver robust systems
                                that streamline operations, enhance productivity, and amplify impact
                            </p>
                        </div>
                        <div>
                            <p>
                                Backed by a team of seasoned professionals, each driven by a shared vision of redefining
                                industry standards, we stand as a trusted partner in your quest for operational excellence.
                                From concept to execution, we prioritize collaboration, agility, and unwavering support,
                                ensuring your organization not only adapts but thrives in the face of change.
                            </p>
                            
                        </div>
                    </div>
                    <div className="relative h-[280px] mt-20 rounded-[8px]">
                        <Image src={`${IMAGE_BASE_PATH}/ourmission.jpg`} fill className="rounded-[8px] absolute w-full right-0" alt="" />
                    </div>
                </div>
            </section>
            <section className="text-slate-700 py-[60px]  bg-white">
                <div className="px-5 md:px-20">
                    <h1 className="text-[26px] font-bold">Our Vision</h1>
                    <div className="mt-6 grid place-content-center grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-y-[20px] gap-x-[100px]">
                        <div>
                            <p className="mb-6">
                                Explore our comprehensive range of tailored solutions designed to optimize
                                and streamline your operations. From education to healthcare, corporate to
                                non-profit, we have the expertise to meet your unique needs.
                            </p>
                            <p>
                                Enhance efficiency and productivity in your corporate environment.
                                Our systems offer features for project management, HR, finance, 
                                and collaboration tools, ensuring smooth business operations.
                            </p>
                        </div>
                        <div>
                            <div className="text-center sm:text-start mb-10">
                                <button className="px-14 py-2 rounded-[40px] bg-vsn-btndeep text-vsnlight">Read More</button>
                            </div>
                            <p>
                                Enhance efficiency and productivity in your corporate environment.
                                Our systems offer features for project management, HR, finance, 
                                and collaboration tools, ensuring smooth business operations
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[280px] mt-16 rounded-[8px]">
                        <Image src={`${IMAGE_BASE_PATH}/ourvision.jpg`} fill className="rounded-[8px] absolute w-full right-0" alt="" />
                    </div>
                </div>
            </section>
            <section className="text-white bg-vsnblue">
                <div className="py-[60px] px-5 md:px-20">
                    <h1 className="text-[26px] pt-12">Our Values</h1>
                    <div className="mt-6 grid place-content-center grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-y-[20px] gap-x-[100px]">
                        <div className="flex flex-col gap-4">
                            {
                                values.map(({title,body},index)=>(
                                    <div key={index} className="flex sm:items-center gap-6">
                                        <div className="flex justify-center font-bold items-center h-8 w-8 text-slate-700 shrink-0 rounded-[50%] bg-white">{index+1}</div>
                                        <div className="text-[16px]">
                                            <span className=" text-vsnbluelight">{title}: </span>
                                            <span className="text-[14px] sm:text-[16px] text-white ml-2">{body}</span>
                                        </div>
                                    </div>
                                ))
                            }
                       </div>
                       <div>
                            <p>A description of the company’s core values and how they guide the work and culture. </p>
                            <div className="relative h-[280px] mt-4 rounded-[8px]">
                                <Image src={`${IMAGE_BASE_PATH}/values.png`} fill className="rounded-[8px] absolute w-full right-0" alt="" />
                            </div>
                       </div>
                    </div>
                </div>
            </section>    
            <section className="pt-20">
                <div>
                {
                    <Team showText={false}/>
                }
                </div>
            </section>
            <section>
                <div className="px-4 sm:px-[60px]">
                    <h1 className="text-vsnblue text-[28px] font-bold text-center">Client Testimonials</h1>
                    <div className="mt-6 xl:grid xl:grid-cols-[min(100%,400px),1fr] gap-y-[20px] gap-x-[30px]">
                        <div>
                            <h1 className="text-[30px] font-bold text-vsnblue">What Our Client Say?</h1>
                            <div className="text-[0.88rem] text-slate-700">
                                <p className="xl:mb-10">
                                    Hear inspiring stories from clients who have transformed their operations and achieved remarkable success with Nextvsn Tech Innovation’s innovative solutions.
                                </p>
                                <p className="text-[0.88rem] xl:mb-0 mb-10  text-slate-700">
                                    Discover the impact of our innovative solutions and exceptional support.Join the growing list of satisfied clients who trust us to 
                                    drive their success.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6 justify-center xl:justify-start flex-wrap">
                            {   
                                clientcomments.map(({comment,client},index)=>
                                    <div key={index} className="w-[400px] text-slate-600 rounded-[16px] border-2 border-vsnblue py-[24px] px-[30px]">
                                        <p className="mb-4">{comment}</p>
                                        <div className="text-slate-900 font-bold">
                                            <h2>{client.name}</h2>
                                            <div>{client.role}</div>
                                            </div>
                                        <div className="text-right">stars</div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20">
                <ReadyToTransform />
            </section>
        </main>
    )
}