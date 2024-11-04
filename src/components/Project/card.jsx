import styles from '../../styles/project.module.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '../Modal/modal';
import useModularFetch from '../../hooks/modularFetch.js';
import Loader from '../Loader/loading.jsx';


export default function Projectcard() {
  const [bgImage, setBgImage] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { entities: projects, loading, error } = useModularFetch('/api/projects');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  useEffect(() => {
    // Détecter si l'utilisateur est sur mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1023);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fonction pour gérer le clic sur une carte
  const handleCardClick = (project) => {
    setBgImage(project.imageurl);
    setSelectedProject(project);

    if (isMobile) {
      setShowModal(true); // Ouvrir la modal si on est sur mobile
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // Pagination logic - No pagination on mobile
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = isMobile ? projects : projects.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading projects: {error.message}</p>;

  return (
    
    <div
    className={styles.container}
    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    {!selectedProject && (
      <div className={styles.loader}>
          <p className={styles.wait}>WAITING</p>
      </div> // Affiche l'animation si aucun projet n'est sélectionné
    )}
  
      {!isMobile && selectedProject && (
        <div className={styles.moreinfo}>
          <p>{selectedProject.more}</p>
          {selectedProject.skills && (
          <ul>
          {selectedProject.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
          </ul>
          )}
          <Link href={selectedProject.link}><button>Accèder au github</button></Link>
          <Link href={selectedProject.websitelink}><button>Accèder au site</button></Link>
        </div>
      )}
      
      <div className={styles.cardcontainer}>
        <div className={styles.projects}>
          <h1>Projets</h1>
          {currentProjects.map((project, index) => (
            <div 
              key={project._id} 
              className={styles.cards}
              style={{ marginLeft: `${(index % 5) * 60}px` }} 
              onClick={() => handleCardClick(project)}
            >
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

          {/* Pagination controls - Hidden on mobile */}
          {!isMobile && (
            <div className={styles.pagination}>
              <button 
                onClick={() => setCurrentPage(currentPage - 1)} 
                disabled={currentPage === 1}
              >
                Précédent
              </button>
              <span>Page {currentPage} sur {totalPages}</span>
              <button 
                onClick={() => setCurrentPage(currentPage + 1)} 
                disabled={currentPage === totalPages}
              >
                Suivant
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal pour afficher les informations du projet en mode mobile */}
      {isMobile && showModal && selectedProject && (
        <Modal onClose={closeModal} title={selectedProject.title}>
          <p>{selectedProject.more}</p>
          <Link href={selectedProject.link}><button>Accèder au github</button></Link>
          <Link href={selectedProject.websitelink}><button>Accèder au site</button></Link>
        </Modal>
      )}
    </div>
  );
}

Projectcard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  backgroundUrl: PropTypes.string,
};
