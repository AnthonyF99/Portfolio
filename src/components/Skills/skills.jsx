import styles from '../../styles/skills.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Round from '../Rounds/rounds.jsx';
import HTML from '../../../public/assets/html.png'
import useModularFetch from '../../hooks/modularFetch.js';
import Loader from '../Loader/loading.jsx'


export default function Skills() {
    const [activeCategory, setActiveCategory] = useState('Hard Skills');
    const { entities: skills, loading, error } = useModularFetch('/api/skills');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading projects: {error.message}</p>;




    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    const filteredSkills = skills.filter(skill => skill.category === activeCategory);

    return (
        <div className={styles.container}>
            <div className={styles.skillslinks}>
                <ul>
                    <li>
                    <button 
                            onClick={() => handleCategoryChange('Hard Skills')}
                            className={activeCategory === 'Hard Skills' ? styles.active : ''}
                        >
                            Hard Skills
                        </button>
                    </li>
                    <li>
                    <button 
                            onClick={() => handleCategoryChange('Soft Skills')}
                            className={activeCategory === 'Soft Skills' ? styles.active : ''}
                        >
                            Soft Skills
                        </button>
                    </li>
                    <li>
                    <button 
                            onClick={() => handleCategoryChange('Tools')}
                            className={activeCategory === 'Tools' ? styles.active : ''}
                        >
                            Tools
                        </button>
                    </li>
                </ul>
            </div>
            <div className={styles.skills}>
                <div className={styles.skillstitle}>
                    <p>Skills</p>
                </div>
                <div className={styles.allskills}>
                    {filteredSkills.map((skill, index) => (
                        <div key={index} className={styles.skill}>
                            <Round title={skill.title} url={skill.url} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}