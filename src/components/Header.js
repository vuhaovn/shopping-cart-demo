import React from 'react'

const Header = (props) => {
  const {count} = props
  return (
    <header className='flex'>
      <h1>shopping cart demo</h1>
      <div>
        Cart: {count}
      </div>
    </header>
  )
}

export default Header
