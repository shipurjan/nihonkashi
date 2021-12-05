import Link from 'next/link'
import Image from './Image'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.image}>
      <Link href="https://github.com/shipurjan/nihonkashi">
        <a><Image
        src="/github.png"
        height={20}
        width={20}
        alt=""
      /></a>
      </Link>
      </div>

    </footer>
  )
}