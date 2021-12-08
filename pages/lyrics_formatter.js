import Head from 'next/head'
import Layout from '../components/Layout'
import Textarea from '../components/Textarea';
import Button from '../components/Button';

function removeRubyTags(input){
  input = input.replaceAll(/<rp>(.*?)<\/rp>/ig,"");
  input = input.replaceAll(/<\/?ruby>/ig,"");
  input = input.replaceAll(/<rb>/ig,"(");
  input = input.replaceAll(/<\/rb>/ig,")");
  input = input.replaceAll(/<rt>/ig,"[");
  input = input.replaceAll(/<\/rt>/ig,"]");
  return input;
}

function whiteCharactersToNewline(input){
  input = input.replaceAll(/[\s　]/ig, "\n");
  return input;
}

function getText(){
  let input = document.getElementById("input").value;
  input = removeRubyTags(input);
  input = whiteCharactersToNewline(input);
  
  let lyrics = input.split("\n");
  let array = [];

  while(lyrics.indexOf("") != -1){
    array.push(lyrics.slice(0,lyrics.indexOf("")));
    lyrics = lyrics.slice(lyrics.indexOf("") + 1);
  } array.push(lyrics);

  let output = document.getElementById("output");
  output.value = JSON.stringify(array,null,'    ');
}

export default function About() {
  const title = "Lyrics formatter";
  const subtitle = "Text to JSON.";
  const description = "Text to JSON formatter";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Layout title={title} subtitle={subtitle}>
        <p>{"(ruby tags will get converted to brackets syntax)"}</p>
        <Button click={getText} text="Format" />
        Input:
        <Textarea id="input" readonly={false}/>
        Output:
        <Textarea id="output" width="40vw" height="12vh" readonly={true}/>
      </Layout>
    </>
  )
}
