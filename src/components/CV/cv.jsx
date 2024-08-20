import styles from '../../styles/cv.module.scss';

export default function Cv() {
    return (
        <div className={styles.cvcontainer}>
            <div className={styles.cvbutton}>
                <button id="cvbtn">Télécharger mon cv</button>
            </div>
            <div className={styles.cvblock}>
                <div className={styles.cvtitle}>
                    <p>Education</p>
                </div>
                <div className={styles.cvinfo}>
                    <ul>
                        <li>Lycée bellepierre BAC STMG SIG</li>
                        <li>2016-2017</li>
                        <li>Notion de base pour le développemen web</li>
                    </ul>
                    <ul>
                        <li>Lycée bellepierre BTS SIO Non achevée</li>
                        <li>2017-2018</li>
                        <li>Cette formation avait pour but de poursuivre l’acquisition
                            de compétences dans le domaine informatique, tel que la
                            création de sites web, d’application et gestion de réseau
                            et cela ma permis de gagné en expérience
                        </li>
                    </ul>
                    <ul>
                        <li>OpenClassroom - Développeur web</li>
                        <li>février à octobre 2024</li>
                        <li>Formation profesionnelle de développement web, au
                            cours de cette formation j’ai pu apprendre toutes
                            les compétences essentielles au métier.Titre professionnel niveau 5 : HTML, CSS, Javascript,
                            React Native, Git & Github, Node.js & express
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}