import React from 'react'
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons'
const Footer = () => {
  return (
    <footer className='container footer'>
      <div>
        <h3>Lily Shop</h3>
        <p>Hotline: 0348.863.083-0963.155.397</p>
        <p>address: 11 /02/03 Luong The Vinh Ha Noi</p>
      </div>
      <div></div>
      <div>
        <p>Customer satisfaction is our pleasure, which is also the motivation to help the shop grow more and more</p>
        <span><FacebookOutlined /><InstagramOutlined /></span>
      </div>
    </footer>
  )
}

export default Footer