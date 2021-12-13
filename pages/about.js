import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  const title = "About";
  const subtitle = "Lyrics to Japanese songs I like";
  const description = "Lyrics to Japanese songs.\n日本語の歌詞";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout title={title} subtitle={subtitle}>
        <p>You should be able to read the lyrics to all songs listed here if you can read hiragana and katakana</p>
      </Layout>
    </>
  )
}
