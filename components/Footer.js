import Link from 'next/link'
import Image from './Image'
import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.imageContainer}>
        <Link href="https://github.com/shipurjan/nihonkashi">
          <a><Image className={styles.image}
          src="/github.png"
          height={20}
          width={20}
          alt=""
        /></a>
        </Link>・2021
      </div>
      <div>
        Deployments:
        <div>
          <Link href="https://nihonkashi.vercel.app/">
          <a>master</a>
          </Link>
        </div>
        <div>
          <Link href="https://nipponkashi.vercel.app/">
          <a>develop</a>
          </Link>
        </div>
      </div>
    </footer>
  )
}