import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

const Section3 = () => {
  return (
    <div className='m-4 justify-between items-center flex text-sm font-thin'>
        <div>
            <span>
                Showing <Button className='bg-gray-200 text-primary'>100</Button> out of 100
            </span>
        </div>
        <div>
            <span className='flex'>
                <ArrowLeft className='bg-gray-200 text-primary mr-1'/>  1  2  3  4  5  ...  15  16  <ArrowRight className='bg-gray-200 text-primary ml-1'/>
            </span>
        </div>
    </div>
  )
}

export default Section3