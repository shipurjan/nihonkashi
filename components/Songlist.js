import Link from 'next/link'
import styles from '../styles/Songlist.module.scss'
import songlist from '../pages/songs/json/songlist.json';


function listSongs(list){
  return list.map((data) => 
    <li key={data.id}>
        <Link href={"/songs/"+data.id.toString()}>
          <a>&quot;{data.title}&quot; by {data.artist}</a>
        </Link>
    </li>);
}

export default function Layout() {
    return (
      <ul className={styles.songlist}>
      {listSongs(songlist)}
      </ul>
    )
}