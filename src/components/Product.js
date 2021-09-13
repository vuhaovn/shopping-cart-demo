import React from 'react'

const Product = (props) => {
  const {products, addItem} = props
  return (
    <div className='product'>
      {products.map(product => (
        <div className='box' key={product.id}>
          <img src={product.image} alt="" />
          <h3>{product.name}</h3>
          <p className='price'>Price: {product.price}</p>
          <button className='btn' onClick={() => addItem(product)}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Product
