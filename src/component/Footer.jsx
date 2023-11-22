import React from 'react'
import { FacebookOutlined, InstagramOutlined } from '@ant-design/icons'
const Footer = () => {
  return (
    <footer className='container footer'>
      <div>
        <h3 style={{ paddingBottom: '30px' }}>Lily Shop</h3>
        <p>Hotline: 0348.863.083-0963.155.397</p>
        <p>address: 11 /02/03 Luong The Vinh Ha Noi</p>
      </div>
      <div>
        <h3 style={{ paddingBottom: '30px' }}>Policy</h3>
        <p>Book of Books</p>
        <p>Payment book policy</p>
        <p>Return book policy</p>
        <p>Transport book policy</p>
      </div>
      <div>
        <p>Customer satisfaction is our pleasure, which is also the motivation to help the shop grow more and more</p>
        <span><FacebookOutlined /><InstagramOutlined /></span>
      </div>
    </footer>
  )
}

export default Footer