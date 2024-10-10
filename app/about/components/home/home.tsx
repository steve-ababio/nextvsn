import Hero from "@/app/components/hero/hero";
import { AboutHeroText } from "../herotext/herotext";

export default function AboutHome(){
    return(
        <Hero buttonlabel="About us">
            <AboutHeroText />
        </Hero>
    )
}