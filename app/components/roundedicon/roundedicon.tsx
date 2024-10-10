import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

type RoundedIcon = {
    Icon:IconType,
    href?:string
}
export default function RoundedIcon({Icon,href}:RoundedIcon) {
  return (
    <div className="bg-vsnlight h-[2rem] w-[2rem] rounded-[50%] flex justify-center items-center">
        <Link href={""}><Icon size={22} color="black"/></Link>
    </div>
  )
}
