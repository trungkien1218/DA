import React from 'react'
import { useAppContext } from '../hooks/useAppContext'
import { Link } from 'react-router-dom';



export const ProductList = () => {
  const { products } = useAppContext();
  return (
    <main className='main-prd'>
      <h1 style={{ color: 'Black', textAlign: 'center', padding: '50px' }}>My product</h1>
      <div className='container '>
        <div className='prd-page'>
          {products.map(product => (
            <Link key={product.id} to={`/products/${product.id}`} style={{ textDecoration: 'none' }} className='prd'>
              <div className='product-cart'>
                <div className="product-cart-thumbnail ">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className='img-prd'
                  />
                </div>
                <div className="product-card-info ">
                  <h3 className="product-card-title">
                    {product.title}
                  </h3>
                  <div className="product-card-price">
                    {`${product.price}$`}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </main>
  )
}
{/*
 {
        "id": 3,
        "title": "",
        "description": "The bouquet brings happiness to the recipient and the giver, giving love, durable with time",
        "price": 1249,
        "category": "flower",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        
    },

*/}

