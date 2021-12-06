import Image from './Image'
import Head from 'next/head'
import reactStringReplace from 'react-string-replace';
import Layout from '../components/Layout'
import styles from '../styles/Song.module.scss'


function addRubySubtags(word){
  word = reactStringReplace(word, /\((.*?)\)/g, (match, i) => (
    <rb>{match}</rb>
  ));
  return reactStringReplace(word, /\[(.*?)\]/g, (match, i) => (
    <><rp>[</rp><rt>{match}</rt><rp>]</rp></>
  ));
}

function convertBracketsToRuby(line){
  let substr_array = line.split(/\((.*?)\]/g);
  let merged_array = [substr_array[0]];

  for (let i = 1; i < substr_array.length; i+=2) {
    let two = '(' + substr_array[i] + ']' + substr_array[i+1];
    merged_array.push(two);
  } merged_array = merged_array.filter(e=>e);

  const new_array = merged_array.map((substr) => {
      if(substr.includes(")["))
        return <ruby>{addRubySubtags(substr)}</ruby>;
      return substr;
  })
  return new_array;
}

function getLyrics(lyrics){
    return lyrics.map(verse => <verse key={verse.key}>{verse.map(line => <line lang="ja" key={line.key}>{convertBracketsToRuby(line)}</line>)}</verse>);
}

function isLyricsChecked(isLyricsComplete){
  if(isLyricsComplete)
    return <><Image
        src="/verified.png"
        height={20}
        width={20}
        alt="verified.png"
        title="Lyrics and furigana checked by me (to the best of my ability)"
      /> Lyrics verified</>
    return <><Image
      src="/unverified.png"
      height={20}
      width={20}
      alt="unverified.png"
      title="Lyrics and furigana NOT checked by me"
    /> Lyrics not verified</>
}

export default function Home({songdata}) {
  const title = songdata.title;
  const romanized_title = songdata.romanized_title;
  const artist = songdata.artist;
  const romanized_artist = songdata.romanized_artist;
  const youtube_url = songdata.youtube_url.slice(-11);
  const lyrics = getLyrics(songdata.lyrics);
  const checked_status = isLyricsChecked(songdata.lyrics_complete);

  const description = 'Japanese lyrics of "' + romanized_title + '" by ' + romanized_artist + '\n"'+ title + '" ー　'+ artist +'の日本語歌詞';

  return (
    <>
    <Head>
      <title>&quot;{title}&quot; by {artist}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout title={title} subtitle={artist}>
      <div className={styles.checked}>{checked_status}</div>
        <div className={styles.youtube}>
          <iframe unselectable="on" src={"https://www.youtube.com/embed/"+youtube_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className={styles.lyrics}>
            {lyrics}
        </div>
    </Layout>
    </>
  )
}
