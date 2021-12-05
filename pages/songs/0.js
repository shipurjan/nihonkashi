import Song from '../../components/Song'
import songdata from './json/songlist.json'
import { useRouter } from 'next/router'

function truncPath(path){
    let position = path.lastIndexOf("/")+1;
    path = path.slice(position);
    return path
}

export default function Songpage() {
    const { asPath } = useRouter();
    return <Song songdata={
        songdata[truncPath(asPath)]
    } />
}
