import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import img1 from '../src/assets/1 (1).png'
import img2 from '../src/assets/1 (2).png'
import img3 from '../src/assets/1 (3).png'
import card2 from '../src/assets/card2.png'
import card4 from '../src/assets/card4 (2).png'
import img18 from '../src/assets/image 18.png'
import card6 from '../src/assets/card6.png'
import card7 from '../src/assets/card7.png'
import card8 from '../src/assets/card8.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      {/* main_container */}
      <div className='w-[95%] h-[580vh] border-solid border-[3px] border-red-700 m-auto'>
        {/*  */}
        {/* <header>
          <nav className='headerNavBar'>
          <section></section>
          </nav>
        </header>
        <main>
          <section>
            <section></section>
            <section></section>
            <section></section>
          </section>
          <section>
            <article>

            </article>
          </section>
        </main> */}
        {/*  */}
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
          <div className='w-[40%] h-[75vh] border-solid border-red-600 border-[2px] flex '>
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


        {/* #card3 */}
        <div className='w-[100%] h-[75vh] border-solid border-red-500 border-[2px] flex items-center'>

          {/* card_left */}
          <div className='w-[50%] h-[75vh] border-solid border-[2px] border-red-500 flex flex-col justify-center'>
            <h1 className='text-[#192252] font-bold text-[36px] mb-[12px]'>Cabin Activities</h1>
            <p className='text-[#848FAC] text-[16px]'>Don’t worry to get bored easily in our cabin.<br /> We have so many cabin activities for you to do it alone or with group. Maybe this is the best <br /> chance for you to make new friends or even a lover.</p>
          </div>

          {/* card_right */}
          <div className='w-[50%] h-[75vh] border-solid border-[2px] border-red-500 flex justify-center items-center'>
            <img src={card4} />
          </div>
        </div>


        {/* #card4 */}
        <div class='card4 w-[100%] h-[75vh] border-solid border-[4px] border-red-500 flex justify-center items-center'>


          {/* card_right */}
          <div className='w-[50%] h-[75vh] border-solid border-[2px] border-red-500 flex items-center '>
            <img src={img18} />
          </div>


          {/* card_left */}
          <div className='w-[50%] h-[75vh] border-solid border-[2px] border-red-500 flex flex-col justify-center items-center'>
            <h1 className='text-[#192252] font-bold text-[36px] mb-[12px]'>100% Organic Food</h1>
            <p className='text-[#848FAC] text-[16px]'>We served 100% organic, low process and delicious food. We allow <br /> our guest to have breakfast or dinner request.What ever made your <br /> taste buds happy.</p>
          </div>
        </div>

        {/*# card5 */}
        <div className='w-[100%] h-[50vh] border-solid border-[2px] border-blue-500 flex flex-col justify-center items-center'>
          <h1 className='text-[46px] text-center font-bold'>Many Rooms to Choose</h1>
          <p className='text-[#848FAC] text-center'>There is a room for every needs. We have room for individuals until <br /> family size, we also have a cabin for more private experience</p>
          <button className='w-[160px] h-[7vh] bg-[#0E1734] rounded-[12px] text-[white] ml-[18px] mt-[15px]'>Explore more</button>
        </div>


        {/* #card6 */}
        <div className='w-[100%] h-[90vh] border-[2px] border-solid border-purple-600 flex justify-between'>
          <div className='w-[32%] h-[90vh] border-[2px] border-solid border-red-700 flex flex-col justify-between'>
            <img src={card6} className='w-[100%] h-[65vh]' />
            <h1 className='text-[26px] font-bold'>Single Room</h1>
            <p className='text-[#848FAC]'>Best for a brave lone wolf who need comfort <br /> and quiet quality time, but you still have <br /> a chance to meet others.</p>
            <p className='text-[#424F7B]'>Learn more</p>
          </div>
          <div className='w-[32%] h-[90vh] border-[2px] border-solid border-red-700 flex flex-col justify-between'>
            <img src={card6} className='w-[100%] h-[65vh]' />
            <h1 className='text-[26px] font-bold'>Single Room</h1>
            <p className='text-[#848FAC]'>Best for a brave lone wolf who need comfort <br /> and quiet quality time, but you still have <br /> a chance to meet others.</p>
            <p>Learn more</p>
          </div>
          <div className='w-[32%] h-[90vh] border-[2px] border-solid border-red-700 flex flex-col justify-between'>
            <img src={card6} className='w-[100%] h-[65vh]' />
            <h1 className='text-[26px] font-bold'>Single Room</h1>
            <p className='text-[#848FAC]'>Best for a brave lone wolf who need comfort <br /> and quiet quality time, but you still have <br /> a chance to meet others.</p>
            <p>Learn more</p>
          </div>
        </div>


        {/* #card7 */}

        <div className='w-[100%] h-[60vh] border-solid border-[2px] border-red-500 flex mt-[10px]'>
          <div className='w-[50%] h-[60vh] border-solid border-[1px] border-purple-700 flex flex-col justify-center'>
            <p >Start your journey!</p>
            <h1 className='text-[30px] font-bold'>How to Get My Room?</h1>
            <p className='text-[#848FAC] text-[18px]'>You can contact us by phone or email us. <br /> Easily tap the contact button below and it <br /> will take you to our contact point</p>
            <button className='w-[160px] h-[7vh] bg-[#0E1734] rounded-[12px] text-[white] ml-[18px] mt-[15px]'>Explore more</button>
          </div>
          <div className='w-[50%] h-[60vh] border-solid border-[1px] border-purple-700 flex justify-center items-center'>
            <img src={card7} />
          </div>
        </div>


        {/*# card8 */}
        <div className='w-[100%] h-[70vh] border-[2px] border-red-700 border-solid flex flex-col justify-center items-center'>
          <p className='text-[38px] m-[10px] font-bold text-[#192252]'>Hear From Our Happy Customers</p>
          <img src={card8} className='m-[10px]' />
          <p className='text-center text-[#848FAC]'>“Great service, great food, great people. The scenery is also beautiful, you can do so much <br /> activity even with your famility. Worth every penny! you should come and see for your self.  5 <br /> out of 5! the waffle is great!”</p>
          <h1 className='text-[#192252] text-[28px] font-bold'>Kirana Dunham</h1>
        </div>
      </div>

      {/*# footer  */}
      <div>
        
      </div>

    </>
  )
}

export default App
