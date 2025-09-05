import { Users } from 'lucide-react'
import React from 'react'

const Card = () => {
  return (
     <div className='relative overflow-x-auto'>
      <div className='flex gap-2 md:gap-6 min-w-[900px]'>
        {/* card for 4 listings */}
        {/* card1 */}
        <div className='card min-w-[200px]'>
          <div className='card-face'>
            <Users size={40} className='rounded-full text-chart-4 bg-fuchsia-200 p-2' />
            <div>
              <span className='card-title'>USERS</span>
              <span className='card-desc'>2,453</span>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className='card min-w-[200px]'>
          <div className='card-face'>
            <Users size={40} className='rounded-full text-chart-4 bg-fuchsia-200 p-2' />
            <div>
              <span className='card-title'>USERS</span>
              <span className='card-desc'>2,453</span>
            </div>
          </div>
        </div>
        {/* card3 */}
        <div className='card min-w-[200px]'>
          <div className='card-face'>
            <Users size={40} className='rounded-full text-chart-4 bg-fuchsia-200 p-2' />
            <div>
              <span className='card-title'>USERS</span>
              <span className='card-desc'>2,453</span>
            </div>
          </div>
        </div>
        {/* card4 */}
        <div className='card min-w-[200px]'>
          <div className='card-face'>
            <Users size={40} className='rounded-full text-chart-4 bg-fuchsia-200 p-2' />
            <div>
              <span className='card-title'>USERS</span>
              <span className='card-desc'>2,453</span>
            </div>
          </div>
        </div>
        {/* card ends */}
      </div>
    </div>
  )
}

export default Card