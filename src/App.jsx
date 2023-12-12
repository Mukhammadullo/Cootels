import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import img1 from '../src/assets/1 (1).png'
import img2 from '../src/assets/1 (2).png'
import img3 from '../src/assets/1 (3).png'
import card2 from '../src/assets/card2.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      {/* main_container */}
      <div className='w-[95%] h-[300vh] border-solid border-[3px] border-red-700 m-auto'>

        {/* header */}
        <div className='w-[100%] h-[15vh] border-solid border-[2px] border-red-600 flex justify-between items-center'>
          <h1 className='text-[26px] font-bold text-[#192252]'>Cootels</h1>
          <ul className='flex text-[18px]'>
            <li className='text-[#192252] m-[5px] font-mono'>Roomss</li>
            <li className='text-[#192252] m-[5px] font-mono'>Reservation</li>
            <li className='text-[#192252] m-[5px] font-mono'>Contacs</li>
          </ul>
          <button className='w-[140px] h-[7vh] bg-[#0E1734] rounded-[12px] text-[white]'>Get Started</button>
        </div>

        {/*# card1 */}
        <div className='w-[100%] h-[70vh] border-solid border-[2px] border-red-600 flex'>
          {/* card_right */}
          <div className='w-[50%] h-[70vh] border-solid border-[2px] border-blue-700 flex flex-col  justify-center' >
            <h1 className='font-bold text-[50px] ml-[18px]'>Nature, Warmth, and <br /> Beauty in One Space</h1>
            <p className='text-[#848FAC] text-[18px] ml-[18px]'>One place to release all the stress, bring back happines, <br /> and get back to nature. We provide the best room  <br /> and nature for you. Come visit us anytime you want.</p>
            <button className='w-[160px] h-[7vh] bg-[#0E1734] rounded-[12px] text-[white] ml-[18px] mt-[15px]'>Reservation</button>
          </div>

          {/* card_left */}
          <div className='w-[40%] h-[70vh] border-solid border-[2px] border-blue-700 flex justify-evenly' >
            <img src={img1} className='w-[23%] h-[65vh]' />
            <img src={img2} className='w-[23%] h-[65vh] mt-[30px]' />
            <img src={img3} className='w-[23%] h-[65vh]' />
          </div>
        </div>


        {/* #card2 */}
        <div className='w-[100%] h-[75vh] border-solid border-red-500 border-[2px] flex items-center'>
          {/* card_left */}
          <div className='w-[40%] h-[75vh] border-solid border-red-600 border-[2px] flex justify-center'>
            <img src={card2} className='h-[70vh] ' />
          </div>

          {/* card_right */}
          <div>
            <p className='text-[#192252] text-[40px] font-bold'>Cozy and Down to Earth Cootage <br /> Hotel in Norway.</p>

            <p className='text-[#848FAC] text-[18px] mt-[20px]'>Our Cootage Hotel is an intimate hideway concieved for dicerning <br /> travelers. It faces directly the unique and spectacular panorama of <br /> the Hallerbos Jungle.</p>

            <p className='text-[#848FAC] text-[18px] mt-[20px]'>Cootels extends along a private, quiet, and beautiful nature. Stay <br /> away from crowd and enjoy the cozy and beauty with us.</p>
            <button className='w-[160px] h-[7vh] bg-[#0E1734] rounded-[12px] text-[white]  mt-[15px]'>Reservation</button>
          </div>
        </div>

      </div>


    </>
  )
}

export default App
