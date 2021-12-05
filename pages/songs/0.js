import Song from '../../components/Song'
import songdata from './json/songlist.json'


export default function Songpage() {
    return <Song songdata={
        songdata[0]
    } />
}
