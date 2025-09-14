import React from 'react'
import Card from './Card'

const Section1 = () => {
  return (
    <main className='p-4 pt-4 text-primary'>
        <span className='font-medium text-xl'>Users</span>
        <div className='flex flex-col mx-auto max-x-6xl gap-8 my-5'>
            <Card />
        </div>
    </main>
  )
}

export default Section1