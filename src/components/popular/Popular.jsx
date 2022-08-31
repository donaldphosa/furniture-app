import React from 'react'
import './popular.css'

function Popular() {
  return (
    <main className='popular_main'>
        <h1>Popular Products</h1>
        <div className='slide'>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
            <PopularCard/>
        </div>
    </main>
  )
}

export default Popular


const PopularCard=()=>{
    return(
        <div className='card'>

        </div>
    );
}