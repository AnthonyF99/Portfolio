// components/Admin/Signup.jsx
import styles from '../../styles/adminform.module.scss';
import { useRouter } from 'next/router';

export default function Signup() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      router.push('/login');
    } else {
      console.error('Erreur d\'inscription');
    }
  }

  return (
    <div className={styles.logintcontainer}>
      <form onSubmit={handleSubmit} className={styles.loginform}>
        <p className={styles.title}>Inscription Admin</p>
        <div className={styles.login}>
          <label htmlFor="username">Pseudonyme</label>
          <input
            className={styles.input}
            type="text"
            id="username"
            name="username"
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
          S'inscrire
        </button>
      </form>
    </div>
  );
}
