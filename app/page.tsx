import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Home from "@/app/components/home/home";
import FeatureCard from "@/app/components/featurecard/featurecard";
import ServiceCard from "@/app/components/servicecard/servicecard";
import TeamCard from "@/app/components/teamcard/teamcard";
import { features, services, team } from "@/data/data";
import { IMAGE_BASE_PATH } from "@/constants/constants";
import Team from "./components/team/team";
import ReadyToTransform from "./components/readytotransform/readytotransform";

export default function App() {
  return (
    <main className="min-h-screen w-screen">
      <Home />
      <section className="mt-[200px] bg-white text-slate-600 h-full">
        <div className="px-10 flex ">
            <div className="max-w-[40rem]">
                <h2 className="text-slate-700 font-bold text-[32px] text-balance mb-7">Trusted by many established and start up companies</h2>
                <h3 className="text-[16px] text-slate-500 font-medium text-balance">20+ Businesses and Companies use uses NEXTVSN To Build Their System Management Platforms</h3>
            </div>
            <div>
            </div>
        </div>
      </section>
      <section className="mt-10 bg-vsnblue min-h-screen text-white">
        <div className="py-12">
          <h2 className="text-center pb-16 font-bold text-[32px] ">Features and Benefits</h2>
          <div className="gap-20 px-[10px] sm:px-[30px] md:px-[80px] lg:px-[120px] justify-center grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))]">
            {
              features.map(({icon,title,body})=>(<FeatureCard key={title} Icon={icon} title={title} body={body}  />))
            }
          </div>
        </div>
      </section>
      <section className="pt-20 bg-white">
          <div className="max-w-[40rem] flex items-center flex-col mx-auto w-[90%] text-center">
            <h2 className="
              text-[24px] text-slate-700 font-bold w-fit
              after:content-[''] after:block after:w-[53%] 
              after:mx-auto after:h-[3px] after:bg-slate-600 
              after:mt-2 after:mb-[20px]"
            >
              Who we are
            </h2>
            <h3 className="text-[1rem] text-slate-500 font-medium text-balance mb-[60px]">
              Dedicated to advancing innovation and excellence in system management solutions. Explore our journey, mission, and the core values that drive us toward the future.
            </h3>
          </div>
          <div className="grid gap-x-20 gap-y-10 w-full justify-center grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] px-6 sm:px-20">
            <div className="">
                <div className="relative w-full mb-10">
                  <Image src={`${IMAGE_BASE_PATH}/whatarewe.png`} alt="people in a meeting" width={600} height={400} className="max-w-full object-cover rounded-[30px]" />
                </div>
                <p className="text-slate-500 leading-vsn26">
                  Uncover how Nextvsn Tech Innovation can transform your business operations and accelerate your vision.
                  Partner with us to embrace innovation, leverage cutting-edge technology, and shape a future where your
                  organisation leads with confidence and a clear sense of purpose.
                </p>
            </div>
            <div className="mb-10">
              <h2 className="text-vsnblue font-bold text-[1.4rem] text-center lg:text-start md:text-[1.8rem] lg:text-[2rem] pb-4">About NEXTVSN TECH</h2>
              <div className="text-slate-500">
                <p className="pb-5 leading-vsn26">At NEXTVSN TECH INNOVATION, we are more than just a provider of management solutions;
                  we are architects of transformative business success. With a passion for innovation and
                  a commitment to excellence, we specialize in crafting customized systems that empower 
                  organizations to thrive in an ever-evolving digital landscape.
                </p>
                <p className="pb-4 leading-vsn26">
                  Our journey is defined by a relentless pursuit of efficiency, scalability, and tailored solutions.
                  Whether you're navigating the complexities of education, healthcare, corporate environments, 
                  or non-profit sectors, we deliver robust systems that streamline operations, enhance productivity,
                  and amplify impact.
                </p>
                <p className="pb-4 leading-vsn26">
                  Backed by a team of seasoned professionals, each driven by a shared vision of redefining industry standards,
                  we stand as a trusted partner in your quest for operational excellence. From concept to execution, we prioritize 
                  collaboration, agility, and unwavering support, ensuring your organization not only adapts but thrives in the face 
                  of change.
                </p>
              </div>
              <div className="flex gap-x-4 sm:gap-x-10 mb-8 w-full">
                <div className="text-start">
                  <h3 className="text-[1.2rem] sm:text-[1.5rem] font-bold text-slate-600">20%</h3>
                  <h4 className="text-slate-600 font-semibold text-[0.88rem] sm:text-[1rem]">Management Works</h4>
                </div>
                <div className="text-start">
                  <h3 className="text-[1.2rem] sm:text-[1.5rem] font-bold text-slate-600">5+</h3>
                  <h4 className="text-slate-600 font-semibold text-[0.88rem] sm:text-[1rem]">Years of Experience</h4>
                </div>
                <div className="text-start">
                  <h3 className="text-[1.2rem] sm:text-[1.5rem] font-bold text-slate-600">30%</h3>
                  <h4 className="text-slate-600 text-[0.88rem] sm:text-[1rem] font-semibold">Client satisfaction</h4>
                </div>
              </div>
              <div className="text-center sm:text-start w-full">
                <button className="bg-vsn-btndeep text-vslight px-20 rounded-[60px] py-[10px]">Read More</button>
              </div>
            </div>
          </div> 
      </section>
      <section className="pt-20 text-vsnlight bg-vsnblue">
          <div className="px-6 md:px-14 lg:px-20 py-20">
            <div className="flex flex-col gap-y-8  sm:flex-row sm:justify-between">
              <div className="basis-full">
                <h2 className="uppercase pb-3 font-bold text-[25px]">For your best system management services</h2>
                <p className="leading-vsn26">
                  Explore our comprehensive range of tailored solutions designed to 
                  optimize and streamline your operations. From education to healthcare, 
                  corporate to non-profit, we have the expertise to meet your unique needs
                </p>
              </div>
              <div className="basis-full sm:text-right">
                <button className="bg-vsn-btn px-10 rounded-[60px] py-[12px]">Our Best Services</button>
              </div>
            </div>
            <div className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] pt-12">
              {
                services.map(({image,title,body})=>(<ServiceCard key={title} image={image} title={title} body={body}  />))
              }
            </div>
          </div>
      </section>
      <section className="h-fit text-vsnlight pt-20">
        <ReadyToTransform />
      </section>
      <section className="py-20">
        <Team showText={true} />
      </section>
      <section>
        <div >
          <div className="px-10 sm:px-20">
            <h1 className="text-[1.7rem] sm:text-[2rem] text-balance md:text-[2.5rem] mb-10 text-slate-700 font-bold text-center ">Experience Our Solutions in Action</h1>
            <p className="text-slate-600 mb-10 max-w-[45rem] text-[1rem] mx-auto">
              Watch our videos to see how NEXTVSN TECH INNOVATION transforms businesses with cutting-edge system management
              solutions.Discover real-life success stories and learn more about our innovative approach.
            </p>
          </div>
          <div className="px-3 sm:px-20">
            <div data-video="company video" className="h-[400px] mb-12 w-full max-w-[60rem] mx-auto rounded-[20px] bg-[#d9dfeb]"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
