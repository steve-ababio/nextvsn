import Image from "next/image";
import AboutHome from "./components/home/home";
import { IMAGE_BASE_PATH } from "@/constants/constants";

export default function About(){
    return(
        <main className="min-h-screen">
            <AboutHome />
            <section>
                <div className=" text-slate-600 pt-12">
                    <h1 className="text-[1.25rem] text-center font-bold mb-8">Who we are</h1>
                    <div className="grid place-content-center px-5 md:px-20 grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-y-[50px] gap-x-[100px]">
                        <div className="text-[24px]">
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
            <section className="text-white p-[60px] bg-vsnblue">
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
            <section className="text-slate-700 p-[60px] bg-white">
                <div>
                    <h1 className="text-[26px] font-bold">Our Mission</h1>
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
            <section className="text-white p-[60px] bg-vsnblue">
                <div>
                    <h1 className="text-[26px]">Our Values</h1>
                    <div className="mt-6 grid place-content-center grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] gap-y-[20px] gap-x-[100px]">
                        <div>

                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </section>    
        </main>
    )
}