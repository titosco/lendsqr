import Image from 'next/image'
import React from 'react'
import Img1 from '../../images/Union.png'
import Img2 from '../../images/image4.png'

import { Input } from '@/components/ui/input'
import { Bell, ChevronDown, Search } from 'lucide-react'

const Navigation = () => {
  return (
    <div className='p-5 px-3 shadow-md flex justify-between items-center top-0 fixed w-full z-20 bg-white lg:px-26 text-xs md:text-base'>
        {/* Logo */}
        <div className='flex gap-1 md:gap-2 items-center justify-center'>
            <Image alt='' src={Img1} className=' md:w-[30px]'/>
            <span className='text-primary flex font-bold pr-2'>LENDSQR</span>
        </div>
        {/* search bar */}
        <div>
            <div className="flex items-center">
                <Input id="text" type="text" placeholder="search for anything" className="rounded-l-md rounded-r-none" required />
                <Search className="bg-chart-1 text-white rounded-r-md p-2 w-7 h-7 md:w-9 md:h-9"/> 
                
            </div>
        </div>
        {/* info menu bar */}
        <div className='flex gap-2 md:gap-10 items-center justify-center pr-4'>
            <span className='text-primary font-extralight underline'>Docs</span>
            <span><Bell className='text-primary' /></span>
            <div className='flex gap-1 md:gap-3 items-center'>
                <Image alt='' src={Img2} className='rounded-full'/>
                <span className='flex gap-1 text-primary'>Adedeji <ChevronDown className='text-primary' size={18} /></span>
            </div>
        </div>
    </div>
  )
}

export default Navigation