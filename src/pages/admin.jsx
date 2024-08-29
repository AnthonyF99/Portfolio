// pages/admin.js
import '../styles/globals.scss';
import Header from '../components/Header/header.jsx';
import Dashboard from '../components/Dashboard/dashboard.jsx';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/api/user'); // Interroger l'API pour obtenir les informations utilisateur
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        router.push('/login'); // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
      }
    };

    fetchUser();
  }, [router]);

  if (!user) {
    return <p>Chargement...</p>;
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="dashboard-container">
          <Dashboard />
        </div>
        <button
          onClick={async () => {
            await fetch('/api/logout', { method: 'POST' });
            router.push('/login');
          }}
        >
          Déconnexion
        </button>
      </main>
    </>
  );
}
