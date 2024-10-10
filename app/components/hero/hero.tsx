import React from 'react'
import NavBar from '../navbar/navbar'
import Image from 'next/image'
import { IMAGE_BASE_PATH } from '@/constants/constants'

type Heroprops = {
    children:React.ReactNode,
    buttonlabel:string
}
export default function Hero({children,buttonlabel}:Heroprops) {
  return (
    <div className="relative min-h-[calc(50vh+100px)] w-full bg-no-repeat">
        <NavBar />
        {children}
        <Image src={`${IMAGE_BASE_PATH}/bgsecondary.jpg`} fill alt="" className="block object-left object-cover absolute h-full -z-10 inset-0" />
        <button className="px-8 ml-10 sm:ml-20 py-2 border border-white rounded-[40px]">{buttonlabel}</button>
    </div>
  )
}
