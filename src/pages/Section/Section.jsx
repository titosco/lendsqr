import React from 'react'
import Sidebar from '../_components/Sidebar'
import SectionMain from './SectionMain'

const Section = () => {
  return (
    <main className='mt-4 sm:mt-12 pt-10 sm:pt-8 w-full  flex flex-row bg-stone-100'>
      <Sidebar />
      <SectionMain />
    </main>
  )
}

export default Section