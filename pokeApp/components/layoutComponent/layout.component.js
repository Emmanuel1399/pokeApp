
import styles from './layout.module.css'

export default function Layout({ children }) {
  return (
    <main className={styles.container}>
      <div className={styles.grid}>
        {children}
      </div>
    </main>
  )
}