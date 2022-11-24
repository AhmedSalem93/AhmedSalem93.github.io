import React from 'react'
import './home.css'
import Social from './Social';
import Data from './Data';
import Scroll from './Scroll';
const Home = () => {
  return (
    <section className='home section' id='home'>
        <div className='homeContainer container grid'>
            <div className='homeContent grid'>
              <Social/>
              <div className='homeImg'></div>
              <Data/>
            </div>
            <Scroll/>

        </div>
    </section>
  )
}

export default Home