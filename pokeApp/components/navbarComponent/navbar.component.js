'use client'
import { useState } from 'react'
import styles from './navbar.module.css'

export default function Navbar({ onFilter, onReset }) {
  const [query, setQuery] = useState('')

  const handleInputChange = (e) => {
    const value = e.target.value
    setQuery(value)
    onFilter(value.toLowerCase())
  }

  const handleReset = () => {
    setQuery('')
    onReset()
  }

  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src="/pokeballBar.png" alt="Pokeball" />
      <h1 className={styles.title}>Pokemon Cards</h1>
      <div className={styles.separator}>/</div>
      <div className={styles.searchSection}>
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          value={query}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
        <button className={styles.resetButton} onClick={handleReset}>
          Reset
        </button>
      </div>
    </nav>
  )
}
