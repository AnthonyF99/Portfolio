// components/Admin/Login.jsx
import styles from '../../styles/adminform.module.scss';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const { token } = await response.json();
      localStorage.setItem('token', token); // Ou utiliser un cookie sécurisé
      router.push('/admin');
    } else {
      // Gérer les erreurs
      console.error('Erreur de connexion');
    }
  }

  return (
    <div className={styles.logintcontainer}>
      <form onSubmit={handleSubmit} className={styles.loginform}>
        <p className={styles.title}>Admin page</p>
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
          Se connecter
        </button>
      </form>
    </div>
  );
}
