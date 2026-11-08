import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Dark mode state
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Cart state
  const [cartItems, setCartItems] = useState([])

  // Category filter state
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  // Add product to cart
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product])
  }

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Dark Mode Toggle */}
      <DarkModeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

      {/* Category Filter */}
      <div style={{ margin: '1rem 0' }}>
        <label>Filter by Category: </label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>

      {/* Product List */}
      <ProductList
        selectedCategory={selectedCategory}
        addToCart={addToCart}
      />

      {/* Cart */}
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App;