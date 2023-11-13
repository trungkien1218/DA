import React from 'react'
import { Carousel } from 'antd'
const contentStyle = {
  height: '600px',

  lineHeight: '160px',
  textAlign: 'center',

};
const Home = () => {
  return (
    <>
      <main className='main-home'>

        <section className='sec1'>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}><div className='pic1'>
                <p className='text-caro myshadow'>Pretty</p>
                <p className='text-caro2 myshadow'>Each product created from us is an art that is hard to deny with people who love them</p>
              </div></h3>
            </div>
            <div>
              <h3 style={contentStyle}><div className='pic2'><p className='text-caro myshadow'>Forever</p>

              </div></h3>
            </div>
            <div>
              <h3 style={contentStyle}><div className='pic3'><p className='text-caro myshadow'>Sophisticated</p>
                <p className='text-caro2 myshadow'>Each product created from us is an art that is hard to deny with people who love them</p>
              </div></h3>
            </div>
            <div>
              <h3 style={contentStyle}><div className='pic4'><p className='text-caro myshadow'>Unique</p>
                <p className='text-caro2 myshadow'>Each product created from us is an art that is hard to deny with people who love them</p>
              </div></h3>
            </div>
            <div>
              <h3 style={contentStyle}><div className='pic5'><p className='text-caro myshadow'>particularistic</p></div></h3>
            </div>
          </Carousel>


        </section>
        <section className='sec2 container'>
          <div className='text2 '>
            <p className='myshadow2 ' style={{ fontSize: '40px', color: '#ff0597' }}>Flower</p> The flowers are meticulously knit meticulously. You can buy in a bouquet or individual

          </div>
          <div className="img2">

          </div>
        </section>
        <section className='sec2 container'>
          <div className="img3">

          </div>
          <div className='text2 '>
            <p className='myshadow2 ' style={{ fontSize: '40px', color: '#ff0597' }}>Animals</p> made sophisticated, lovely and beautifully suitable for everyone's tastes

          </div>

        </section>
      </main>
    </>
  )
}

export default Home