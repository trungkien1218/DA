import React, { useContext } from 'react'
import { CartContext } from '../context/Cart-context'
import { useShoppingCartContext } from '../hooks/useShoppingCartContext'
import { Button } from 'antd'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../hooks/useAppContext'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { DeleteOutlined } from '@ant-design/icons';
import RadioCart from './RadioCart';
const ShoppingCart = () => {
  const { items, totalPrice } = useShoppingCartContext();

  const { onIncreItem, onDecreItem, onRemoveItem, onClearAll } = useShoppingCartContext();

  const handleIncreItem = (product) => {

    onIncreItem({ productId: product.id, quantity: + 1 })
  }
  const handleDecreItem = (product) => {

    onDecreItem({ productId: product.id, quantity: -1 })
  }
  const handleRemoveItem = (product) => {
    onRemoveItem({ productId: product.id, quantity: 0 })
  }
  const handleClearAll = (product) => {
    onClearAll({ productId: product.id, quantity: 0 })
  }
  {/*const handleTotalPrice = (price) => {
    console.log(price)
    onTotalPrice({ productId : product.id , totalPrice : 0})
  }*/}

  /// const totalP =useSelector(totalPrice);






  return (
    <>
      <main className='main-cart '>
        <h1 className='ShoppingCart-page'>ShoppingCart page</h1>

        <div className='cart-prd'>

          <div>
            <div className='list'>Cart list</div>
            <div className='table-cart container scroll'>
              {items.map(product => (
                <div key={product.product.id} to={`/items/${product.product.id}`}>
                  <div className='list-cart'>
                    <div className='flex'>
                      <div className='cart-prd'>
                        <div className='cart-img'>
                          <img
                            src={product.product.thumbnail}
                            alt={product.product.title}
                            className='cart-img-prd'
                          />
                        </div>
                        <div>
                          <h1 className='cart-name'>
                            {product.product.title}
                          </h1>
                          <div className='cart-price'>
                            Price:    ${product.product.price}
                          </div>
                        </div>
                      </div>
                      <div>
                        <Button onClick={() => handleDecreItem(product.product)}> - </Button>
                        <span style={{ padding: '10px' }}>{product.quantity}</span>
                        <Button onClick={() => handleIncreItem(product.product)}>+</Button>
                        <span style={{ padding: '10px' }}>
                          <DeleteOutlined onClick={() => handleRemoveItem(product.product)} />
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button onClick={() => handleClearAll(product.product)}> Clear all </Button>
                </div>
              ))}
            </div>
          </div>
          <div >
            <div className='list'>Customer information</div>
            <div className='client table-cart'>
              <div className='cart-prd'>
                <div className='text-client'>
                  <p >Name <span className='note'>*</span></p>
                  <input type="text" />
                </div>
                <div className='text-client' >
                  <p >Phone number <span className='note'>*</span></p>
                  <input type="text" />
                </div>
              </div>
              <div className='text-client' >
                <p >Address <span className='note'>*</span></p>
                <input type="text" style={{ height: '30px', width: '460px' }} />
              </div>
              <div className='text-client' style={{ paddingBottom: '15px' }}>
                <p >Note</p>
                <textarea name="" id="" cols="64" rows="5"></textarea>
              </div>
            </div>
            <div className='text-client table-cart' style={{ marginTop: '20px' }}>
              <p >Payment methods</p>
              <RadioCart style={{ marginTop: '20px' }} />
              <div className='line'></div>
              <div className='total-price'>
                <p style={{ fontSize: '25px', fontWeight: '600' }}>Total price:</p>
                <div style={{ fontSize: '30px' }}>${totalPrice}</div>
                <div class="buttons-container">
                  <button class="button-arounder">Payment</button>
                </div>
              </div>


            </div>


          </div>
        </div>

      </main>
    </>
  )
}

export default ShoppingCart