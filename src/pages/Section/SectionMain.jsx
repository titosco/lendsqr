import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const SectionMain = () => {
  return (
    <main className='p-4 pt-10 bg-stone-100'>
        <Section1 />
        <Section2 />
        <Section3/>
    </main>
  )
}

export default SectionMain