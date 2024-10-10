

export default function HeroText(){
    return(
        <main className="text-center mx-auto pt-10 text-vsnlight max-w-[1000px] w-[90%]">
        <div className="mb-[54px]">
            <h1 className=" text-[2rem] md:text-[2.6rem] lg:text-[3rem] mb-5 font-bold text-balance uppercase ">
                TRANSFORMING MANAGMENT SYSTEMS FOR A SMARTER FUTURE
            </h1>
            <h2 className="sm:text-[1.2rem] text-[1rem] font-medium text-balance">
                Innovative, Custom-Built Management Systems tailored to your Unique Needs
            </h2>
            </div>
        <div className="text-center flex justify-center">
            <div className="rounded-[40px] [@media(max-width:443px)]:rounded-[10px] py-[12px] px-4 w-fit bg-vsnlight [@media(max-width:443px)]:block flex gap-x-[15px]">
                <button className="[@media(max-width:443px)]:px-12 px-6 py-2 rounded-[24px] bg-vsn-btndeep [@media(max-width:443px)]:mb-4 text-vsnlight ">Get Started</button>
                <button className="px-6 py-2 rounded-[24px] border-2 border-[#37C3FF] text-[#37C3FF] ">Request a consultation</button>
            </div>
        </div>
    </main>
    )
}