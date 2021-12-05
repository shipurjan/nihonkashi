import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  const title = "About";
  const description = "Lyrics to Japanese songs.\n日本語の歌詞";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout title={title}>
        <p>A page with Japanese lyrics (and furigana) to songs I like</p>
      </Layout>
    </>
  )
}
