import './hero_sec.css'

import React from 'react'

function Hero_sec() {
  return (
    <main className='hero_sec'>
        <div className='hero_left'>
            <h1>
                Exclusive Deals of Furniture Collection
            </h1>
            <p>Explore different categories. Find the best deals.</p>
            <button>Shop Now</button>
        </div>
        <div className='hero_right'>
            <div className='hero_pic'>
           <div className='glass'></div>
            </div>
        </div>
    </main>
  )
}

export default Hero_sec