import styles from '../../styles/adminform.module.scss'

export default function Adminformcomp() {
    return (
        <div className={styles.logintcontainer}>
            <form  className={styles.loginform}>
                <p className={styles.title}>Admin page</p>
                <div className={styles.login}>
                    <label htmlFor="name">Pseudonyme</label>
                    <input
                    className={styles.input}
                    type="text"
                    id="name"
                    name="name"
                    required
                    />
                </div>

                <div className={styles.passcontainer}>
                    <label htmlFor="password">Password</label>
                    <input
                    className={styles.input}
                    type="password"
                    id="password"
                    name="password"
                    required
                    />
                </div>
                <button type="submit" className={styles.submitbtn}>
                    Envoyez
                </button>
            </form>
        </div>
    );
};