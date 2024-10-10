import type { Metadata } from "next";
import { Archivo,Urbanist, Montserrat,Questrial,Exo,Encode_Sans,Bai_Jamjuree} from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/footer/footer";

const bai = Bai_Jamjuree({ subsets:["latin"],weight:["400","700","500"]});
const urbanist = Urbanist({ subsets:["latin"],weight:"400"});
const exo = Exo({ subsets:["latin"],weight:"400"});
const encode = Encode_Sans({ subsets:["latin"],weight:"400"});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={encode.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
