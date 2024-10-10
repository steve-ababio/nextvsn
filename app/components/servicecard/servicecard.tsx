import Image from "next/image"

interface ServiceCardProp{
    image:string,
    title:string,
    body:string
}
export default function ServiceCard({image,title,body}:ServiceCardProp){
    return(
        <div>
            <div className="relative h-[250px] mb-4">
                <Image src={image} fill alt="" className="absolute object-cover max-h-full w-full top-0 left-0 rounded-[12px]" />
            </div>
            <div>
                <h2 className="text-[18px] sm:text-[20px] font-bold mb-4">{title}</h2>
                <p className="font-medium leading-vsn26 text-[14px] sm:text-[1rem]">{body}</p>
            </div>
        </div>
    )
}