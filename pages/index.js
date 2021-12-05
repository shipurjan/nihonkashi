import Head from 'next/head'
import Layout from '../components/Layout'
import Songlist from '../components/Songlist'

export default function Home() {
  const title = "日本歌詞";
  const subtitle = "Japanese songs lyrics";
  const description = "Lyrics to Japanese songs.\n日本語の歌詞";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout title={title} subtitle={subtitle}>
        <Songlist />
      </Layout>
    </>
  )
}
