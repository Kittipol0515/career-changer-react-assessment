import React from 'react'
import Navbar from './Navbar'
import './owner.css'
import { useEffect } from "react"

const Owner = () => {
  return (
    <div>
        <Navbar />
        <hr />
        <h1>Kitti - Group E - 18</h1>
        <div className='imgall'>
        <img src="https://i.imgflip.com/3u04h5.jpg?a467088" alt="" />
        </div>
        <div className='text'>
            <h4>My bio</h4>
            <p>Hello my name is Kitti. I'm 24 years old. My hobby are playing games , play with cat and sleeping with listening to remix/lofi/xhill song :D.</p>
        </div>
    </div>
  )
}



export default Owner