import Link from 'next/link'
import styles from '../styles/Header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.list}>
        <li className={styles.title}>
        <Link href="/">
            <a>日本歌詞</a>
          </Link>
        </li>
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