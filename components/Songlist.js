import Link from 'next/link'
import styles from '../styles/Songlist.module.scss'
import songlist from '../pages/songs/json/songlist.json';


function listSongs(list){
  let newlist = list.filter(e => e.id >= 0);
  return newlist.map((data) => {
    return <li key={(data.id).toString()}>
        <Link href={"/songs/"+(data.id).toString()}>
          <a title={'"'+data.romanized_title+'" by '+data.romanized_artist}>&quot;{data.title}&quot; by {data.artist}</a>
        </Link>
    </li>
  })
}

export default function Layout() {
    return (
      <ul className={styles.songlist}>
      {listSongs(songlist)}
      </ul>
    )
}