import Link from 'next/link'
import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/">
            <a>日本歌詞</a>
          </Link>
      </div>
      <ul className={styles.list}>
        <li>
        <Link href="/lyrics_formatter">
            <a>Lyrics formatter</a>
          </Link>
        </li>
        <li>
        <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </header>
  )
}