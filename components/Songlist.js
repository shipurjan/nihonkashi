import Link from 'next/link'
import styles from '../styles/Songlist.module.scss'
import songlist from '../pages/songs/json/songlist.json';


function listSongs(list){
  let newlist = list.filter(e => e.id >= 0);
  newlist.sort((a, b) => { // Sort alphabetically first by romanized_artist and then by romanized_title
    let retval = 0;
    if (a.romanized_artist < b.romanized_artist)
      retval = -1;
    if (a.romanized_artist > b.romanized_artist)
      retval = 1;
    if (retval === 0)
      retval = a.romanized_title > b.romanized_title ? -1 : 1;
    return retval;
  })
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