import ReadyToTransform from "../components/readytotransform/readytotransform";
import ContactHome from "./components/home/home";
import ContactDialog from "./components/contactdialog/contactdialog";
import NextVsnLocation from "./components/location/location";

export default function Services(){

    return(
        <main className="min-h-screen">
            <ContactHome/>
            <ContactDialog />
            <NextVsnLocation />
        </main>
    )
}