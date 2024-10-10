import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Home from "@/app/components/home/home";
import FeatureCard from "@/app/components/featurecard/featurecard";
import ServiceCard from "@/app/components/servicecard/servicecard";
import TeamCard from "@/app/components/teamcard/teamcard";
import { features, services, team } from "@/data/data";
import { IMAGE_BASE_PATH } from "@/constants/constants";

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
            <h3 className="text-[1rem] text-slate-500 font-medium text-balance mb-[60px]">Committed to driving innovation and excellence in system management solutions.Discover our journey, mission, and the values that propel us forward.</h3>
          </div>
          <div className="grid gap-x-20 gap-y-10 w-full justify-center grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] px-6 sm:px-20">
            <div className="">
                <div className="relative w-full mb-10">
                  <Image src={`${IMAGE_BASE_PATH}/whatarewe.png`} alt="people in a meeting" width={600} height={400} className="max-w-full object-cover rounded-[30px]" />
                </div>
                <p className="text-slate-500 leading-vsn26">
                  Discover how NEXTVSN TECH INNOVATION can elevate your business operations and propel your vision forward.
                  Join us in embracing innovation, harnessing technology, and shaping a future where your organization leads
                  with confidence and purpose.
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
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,500px),1fr))]">
          <div className="bg-vsnblue py-20 px-[2rem] sm:px-[3rem] md:px-[5rem] lg:px-[4rem] h-[500px]">
            <h1 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] mb-5">Ready to Transform Your Business</h1>
            <p className="mb-8">
              Partner with <strong className="text-vsnbluelight">NEXTVSN TECH INNOVATION</strong> today
              and experience the power of tailored system 
              management solutions. Our dedicated team is
              here to provide you with innovative tools and
              unwavering support, helping you achieve your
              business goals. Take the first step towards 
              enhanced efficiency and success
            </p>
            <button className="bg-vsn-btn text-white px-20 py-3 rounded-[60px] flex justify-center items-center ">
              Contact
              <BsArrowRight />
            </button>
          </div>
          <div className="relative h-[500px]">
              <Image src={`${IMAGE_BASE_PATH}/behindcomputer.jpg`} className="absolute object-cover object-left max-h-full" alt="" fill />
          </div>
        </div>
      </section>
      <section className="py-20">
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
            <div className="text-slate-600 md:col-span-2 flex flex-col place-self-center items-center">
            {/* max-w-[40rem] ml-auto w-[90%] */}
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
          </div>
          
        </div>  
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
