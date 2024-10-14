import React from 'react'
import Navbar from './components/Navbar/Navbar'
import DisplayVid from './components/DisplayVid/DisplayVid'
import Products from './components/products/products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <DisplayVid/>
      <Products/>
    </div>
  )
}

export default App