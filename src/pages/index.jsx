import '../styles/globals.scss';
import Header from '../components/Header/header.jsx';
import Homes from '../components/Home/home.jsx';
import About from '../components/Aboutme/aboutme.jsx';
import Skills from '../components/Skills/skills.jsx';
import Project from '../components/Project/card.jsx';
import CV from '../components/CV/cv.jsx';
import Blogveille from '../components/BlogVeille/blogveille.jsx';
import Contact from '../components/Contact/contact.jsx';

export default function Home() {
    return (
        <>
        <header>
            <Header/>
        </header>
      <main>
        <div>
            <section id="accueil">
                <Homes/>
            </section>
            <section id="a-propos">
                <About/>
            </section>
            <section id="skills">
                <Skills/>
            </section>
            <section id="projets">
                <Project title="Template" description="Template"/>
            </section>
            <section id="cv">
                <CV/>
            </section>
            <section id="veille-technologique">
                <Blogveille/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
        </div>
      </main>
      </>
    );
  }