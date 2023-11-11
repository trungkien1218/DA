import { Carousel } from 'antd'
import React from 'react'
const contentStyle = {
  height: '600px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  
};
const About = () => {
  return (
    <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><div className='pic1'></div></h3>
    </div>
    <div>
      <h3 style={contentStyle}><div className='pic2'></div></h3>
    </div>
    <div>
      <h3 style={contentStyle}><div className='pic3'></div></h3>
    </div>
    <div>
      <h3 style={contentStyle}><div className='pic4'></div></h3>
    </div>
    <div>
      <h3 style={contentStyle}><div className='pic5'></div></h3>
    </div>
  </Carousel>
  )
}

export default About