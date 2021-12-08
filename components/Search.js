import styles from "../styles/Search.module.scss"
import Image from './Image'

export default function  SearchBar({onChange, placeholder}) {
    return (
      <div className={styles.search}>
        <span className={styles.search_span}>
        <Image
            src="/search.png"
            height={35}
            width={35}
            alt="search.png"
        />
        </span>
        <input
          className={styles.search_input}
          type="text"
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    );
  };