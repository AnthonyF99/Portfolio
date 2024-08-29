import styles from '../../styles/dashboard.module.scss'
import Projects from './projects.jsx';
import Skills from './skills.jsx';
import Article from './article.jsx';
import Cv from './cv.jsx';


export default function Dashboard() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Dashboard</h1>
            <div className={styles.subcontainer}>
            <Projects/>
            </div>
            <div className={styles.subcontainer}>
            <Skills/>
            </div>
            <div className={styles.subcontainer}>
              <Article/>
            </div>
            <div className={styles.subcontainer}>
              <Cv/>
            </div>
        </div>
    );
};