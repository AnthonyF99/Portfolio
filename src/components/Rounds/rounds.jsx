import styles from '../../styles/rounds.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import propsTypes from 'prop-types'



export default function About({title, url}) {
    return (
        <div className={styles.container}>
            <div className={styles.rounds}> 
                <div className={styles.round}>
                        <Image 
                        src={url}
                        width={50}
                        height={50}
                        alt={title}
                    />
                </div>
                <p>{title}</p>
            </div>
        </div>
    );
  }

  About.propsTypes = {
    title: propsTypes.string,
    url: propsTypes.string,
  }