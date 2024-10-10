import Image from "next/image";

interface ServiceCardProp{
    image:string,
    name:string,
    role:string,
    position:string
}
export default function TeamCard({image,name,role,position}:ServiceCardProp){
    return(
        <div className="px-6 py-6 shadow-[0px_0px_10px_#ddd] rounded-[16px]">
            <div className="relative h-[250px] mb-3">
                <Image src={image} fill alt="" className="absolute object-contain max-h-full max-w-full top-0 left-0 rounded-[8px]" />
            </div>
            <div>
                <h2 className="text-[20px] text-slate-700 font-bold mb-2">{name}</h2>
                <p className="font-medium text-slate-600 text-[14px] leading-vsn26 mb-2">{role}</p>
                <div className="text-slate-600 font-semibold text-[1rem]">{position}</div>
            </div>
        </div>
    )
}