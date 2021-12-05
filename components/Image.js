import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `https://nihonkashi.neocities.org/${src}?w=${width}&q=${quality || 75}`
  }

export default function Layout(props) {
    return (
        <Image
          loader={myLoader}
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
          title={props.title}
        />
      )
}