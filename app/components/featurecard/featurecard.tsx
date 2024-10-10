import { IconType } from "react-icons"

interface FeatureCardProp{
    Icon:IconType,
    title:string,
    body:string
}
export default function FeatureCard({Icon,title,body}:FeatureCardProp){
    return(
        <div className="px-6 pt-6 h-[250px] max-[250px]:px-2 bg-vsnlight rounded-[8px]">
            <div className="flex gap-8 mb-4 items-center">
                <div className="h-[40px] w-[40px] rounded-[50%] flex justify-center items-center bg-vsn-btn"><Icon color="white" size={25} /></div>
                <div className="grow justify-center"><h2 className="font-semibold text-slate-800">{title}</h2></div>
            </div>
            <p className="leading-vsn26 text-slate-500 text-[1rem] ">{body}</p>
        </div>
    )
}