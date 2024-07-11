import Head from 'next/head';
import Nav from '../Components/Nav/Nav';
import Aboutme from '../Components/Aboutme/Aboutme';
import Skills from '../Components/Skills/Skills';
import Certificates from '../Components/Certificates/Certificates';
import Contact from '../Components/Contact/Contact';
import Projects from '../Components/Projects/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div >
          <Aboutme/>
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </div>
        <div >
          <Nav />
        </div>
      </main>
    </div>
  );
}
