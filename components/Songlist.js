import { useState } from "react";
import Link from 'next/link'
import Search from "./Search"
import styles from '../styles/Songlist.module.scss'
import songlist from '../pages/songs/json/songlist.json';

const intersection = (arr1, arr2) => {
  const res = [];
  for(let i = 0; i < arr1.length; i++){
     if(!arr2.includes(arr1[i])){
        continue;
     };
     res.push(arr1[i]);
  };
  return res;
};
const intersectMany = (...arrs) => {
  let res = arrs[0].slice();
  for(let i = 1; i < arrs.length; i++){
     res = intersection(res, arrs[i]);
  };
  return res;
};

function stripSonglist(list){
  let newlist = list.map(e => {
    let dict = {};
    dict.id = e.id;
    dict.artist = e.artist;
    dict.romanized_artist = e.romanized_artist;
    dict.title = e.title;
    dict.romanized_title = e.romanized_title;
    return dict;
  });
  return newlist;
}

function sortSonglist(list){
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
  return newlist;
}

export default function Songlist() {
  const stripped_songlist = stripSonglist(songlist);
  const sorted_songlist = sortSonglist(stripped_songlist);
  
  const [data, setData] = useState(sorted_songlist);
  const searchData = (pattern) => {
    if (!pattern) {
      setData(sorted_songlist);
      return;
    }
    const matches = [];
    pattern.split(" ").map(subpattern => {
      if (!subpattern.length) return;
      try {
        const regex = new RegExp(subpattern.trim(), 'gi');
        const tmp_matches = [];
        sorted_songlist.map(song => {
          let match = regex.test(song.artist) || regex.test(song.title) || regex.test(song.romanized_artist) || regex.test(song.romanized_title);
          if(match) return tmp_matches.push(song);
        });
        matches.push(tmp_matches);
      }
      catch(e) {
        return;
      };
    });
    if(!matches.length) matches = [matches];
    const result = intersectMany(...matches);
    setData(result);
  }

  return (
    <div>
    <Search
      placeholder="検索"
      onChange={(e) => searchData(e.target.value)}
      />
    <ul className={styles.songlist}>
    { data.map((data) => {
        return <li key={(data.id).toString()}>
            <Link href={"/songs/"+(data.id).toString()}>
              <a title={'"'+data.romanized_title+'" by '+data.romanized_artist}>&quot;{data.title}&quot; by {data.artist}</a>
            </Link>
          </li>
      })}
    </ul>
    </div>
  )
}