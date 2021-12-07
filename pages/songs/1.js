import { useRouter } from 'next/router'
import Song from '../../components/Song'

export default function Songpage() {
    const router = useRouter();
    let path = router.pathname;
    let id = parseInt(path.slice(path.lastIndexOf("/")+1));
    return <Song key={id.toString()} id={id} />
}
