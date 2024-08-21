import styles from '../../styles/project.module.scss';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'


export default function Projectcard() {
  const [bgImage, setBgImage] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Charger les données des projets depuis le fichier JSON
    fetch('/data/projects.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Erreur lors du chargement des données des projets :', error));
  }, []);

  // Fonction pour gérer le clic sur une carte
  const handleCardClick = (project) => {
    setBgImage(project.imageurl);
    setSelectedProject(project);
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Affichage conditionnel du texte "more" pour le projet sélectionné */}
      {selectedProject && (
        <div className={styles.moreinfo}>
          <p>{selectedProject.more}</p>
          <Link href={selectedProject.link}><button>Accèder au github</button></Link>
        </div>
      )}
      
      <div className={styles.cardcontainer}>
        <div className={styles.projects}>
          <h1>Projets</h1>
          {projects.map((project, index) => (
            <div key={index} className={styles.cards} 
                style={{ marginLeft: `${(index % 5) * 60}px` }} // Recommence le décalage toutes les 4 cartes
                onClick={() => handleCardClick(project)}>
              <div className={styles.cardinfo}>
                <div className={styles.cardimage}>
                  <Image src={project.imageurl} width={100} height={100} alt={project.title} />
                </div>
                <div className={styles.cardtext}>
                  <p>{project.title}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Projectcard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  backgroundUrl: PropTypes.string,
};
