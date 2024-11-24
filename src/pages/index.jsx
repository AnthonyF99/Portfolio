import '../styles/globals.scss';
import Header from '../components/Header/header.jsx';
import Homes from '../components/Home/home.jsx';
import About from '../components/Aboutme/aboutme.jsx';
import Skills from '../components/Skills/skills.jsx';
import Project from '../components/Project/card.jsx';
import CV from '../components/CV/cv.jsx';
import Blogveille from '../components/BlogVeille/blogveille.jsx';
import Contact from '../components/Contact/contact.jsx';
import Footer from '../components/Footer/footer.jsx';
import React, { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('');
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      if (observer) {
        sectionRefs.current.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      }
    };
  }, []);

  return (
    <>
      <header>
        <Header activeSection={activeSection} />
      </header>

      <main>
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="snap-item"
          id="accueil"
        >
          <Homes />
        </section>
        <div className="wrapper">
          <div className="scroll-container">
            <section
              ref={(el) => (sectionRefs.current[1] = el)}
              className="snap-item"
              id="a-propos"
            >
              <About />
            </section>
            <section
              ref={(el) => (sectionRefs.current[2] = el)}
              className="snap-item"
              id="skills"
            >
              <Skills />
            </section>
            <section
              ref={(el) => (sectionRefs.current[3] = el)}
              className="snap-item"
              id="projets"
            >
              <Project title="Template" description="Template" />
            </section>
            <section
              ref={(el) => (sectionRefs.current[4] = el)}
              className="snap-item"
              id="cv"
            >
              <CV />
            </section>
            <section
              ref={(el) => (sectionRefs.current[5] = el)}
              className="snap-item"
              id="veille-technologique"
            >
              <Blogveille />
            </section>
            <section
              ref={(el) => (sectionRefs.current[6] = el)}
              className="snap-item"
              id="contact"
            >
              <Contact />
            </section>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </main>
    </>
  );
}
