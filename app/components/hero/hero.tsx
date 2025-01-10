import React from 'react'
import NavBar from '../navbar/navbar'
import Image from 'next/image'
import { IMAGE_BASE_PATH } from '@/constants/constants'

type Heroprops = {
    children:React.ReactNode,
}
export default function Hero({children}:Heroprops) {
  return (
    <div className="relative min-h-[calc(50vh+100px)] w-full bg-no-repeat">
        <NavBar />
        <Image src={`${IMAGE_BASE_PATH}/bgsecondary.jpg`} fill alt="" className="block object-left object-cover absolute h-full -z-10 inset-0" />
        <div className='flex flex-col'>
          <div className="grow-1">{children}</div>
        </div>
    </div>
  )
}
