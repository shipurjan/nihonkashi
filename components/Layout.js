import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.scss'

export default function Layout({title, subtitle, children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
            {title}
        </h1>
        <h2 className={styles.subtitle}>
          {subtitle}
        </h2>
        {children}
      </main>
      <Footer />
    </div>
  )
}