import React from 'react'

const Basket = (props) => {
  const {cartItem, addItem, removeItem} = props
  const priceItem = cartItem.reduce((a,c) => a + (c.price * c.qty), 0)
  const ship = priceItem >= 100000 ? 0 : 30000
  const total = priceItem + ship
  const formatCurrency = (value) => {
    return value.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
  }
  return (
    <div className='basket'>
      <h3>Cart item</h3>
      <hr />
      {cartItem.length === 0 && (<p>No item show</p>)}
      {cartItem.map((item) => (
        <div key={item.id} className='item'>
          <div>{formatCurrency(item.price)} x {item.qty} {item.name}</div>
          <div>
            <button onClick={() => addItem(item)}>+</button>
            <button onClick={() => removeItem(item)}>-</button>
          </div>
        </div>
      ))}
      {cartItem.length !== 0 && (
        <>
          <hr />
          <div className='item'>
            <div>Thành tiền</div>
            <div>{formatCurrency(priceItem)}</div>
          </div>
          <div className='item'>
            <div>Ship</div>
            <div>{formatCurrency(ship)}</div>
          </div>
          <div className='item'>
            <div>Tỗng tiền</div>
            <div>{formatCurrency(total)}</div>
          </div>
        </>
      )}
    </div>
  )
}

export default Basket
