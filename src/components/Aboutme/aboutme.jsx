import styles from '../../styles/aboutme.module.scss'
import linkedin from '../../../public/assets/linkedin.png'
import github from '../../../public/assets/github-mark.svg'
import profilephoto from '../../../public/assets/profilephoto.jpg'
import chromeshape from '../../../public/assets/04_chrome_shape.png'
import Image from 'next/image'
import Link from 'next/link'


export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.chromeshape}>
            <Image
                src={chromeshape}
                width={469}
                height={107}
                alt="Chromeshape"
                />
            </div>
            <div className={styles.textcontainer}>
                <h2>Bonjour, cest Anthony</h2>
                <h3>Je suis un développeur web</h3>
                <p>Je m'appelle Anthony Fontaine. Je suis développeur web à Saint-Denis, sur l'ile de la réunion. J’ai repris les cours en 2024 afin d’acquérir de nouvelles compétences en développement web qui complètent aujourd’hui celles déjà acquises dans le cadre des mes précédentes formation et dans le cadre de projets personnel. Je suis aujourd’hui titulaire d’un Titre Professionnel BAC+2 « Développeur web ». Je code principalement en front et backend et j'ai adopté le framework React comme mon outil de travail principal.
                J'ai aussi pu acquérir de nouvelles compétences liées aux bonnes pratiques et aux savoir-faire professionnels indispensables dans le métier de développeur web (gestion de projets, versioning, ...)</p>
            </div>
            <div className={styles.profilephoto}>
                <Image
                src={profilephoto}
                width={600}
                height={600}
                alt="Photo"
                />
            </div>
            <div className={styles.socials}> 
                <div className={styles.socialround} id="linkedin">
                    <Link href="https://www.linkedin.com/in/anthony-fontaine-75b959187/">
                        <Image 
                        src={linkedin}
                        width={50}
                        height={50}
                        alt="Logo linkedin"
                    />
                    </Link>
                </div>
                <div className={styles.socialround} id="github">
                    <Link href="https://github.com/AnthonyF99">
                        <Image 
                            src={github}
                            width={50}
                            height={50}
                            alt="Logo Github"
                            />
                    </Link>
                </div>
            </div>
        </div>
    );
  }