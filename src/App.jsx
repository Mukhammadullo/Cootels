import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

      </div>


    </>
  )
}

export default App
