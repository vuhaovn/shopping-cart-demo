import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Product from './components/Product'
import Basket from './components/Basket'
import data from './data'
import { useEffect, useState } from 'react';

function App() {
  const {products} = data
  const [cartItem, setCartItem] = useState([])

  const addItem = (product) => {
    const exist = cartItem.find(x => x.id === product.id)
    if(exist) {
      setCartItem(cartItem.map(x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x))
    } else {
      setCartItem([...cartItem, {...product, qty: 1}])
    }
  }

  const removeItem = (product) => {
    const exist = cartItem.find(x => x.id === product.id)
    if(exist.qty === 1) {
      setCartItem(cartItem.filter(x => x.id !== product.id))
    } else {
      setCartItem(cartItem.map(x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x))
    }
  }
  return (
    <div className="App">
      <Header count={cartItem.length} />
      <main>
        <Product products={products} addItem={addItem} />
        <Basket cartItem={cartItem} addItem={addItem} removeItem={removeItem} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
