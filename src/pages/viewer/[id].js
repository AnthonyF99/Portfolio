// pages/viewer/[id].js
import { useRouter } from 'next/router';
import ThreeDViewer from '../../components/3dViewer/3dviewer.jsx';
import useModularFetch from '../../hooks/modularFetch.js';

export default function ViewerPage() {
  const router = useRouter();
  const { id } = router.query;

  // Utilisation de useModularFetch pour récupérer la galerie par ID
  const { entities: gallery, loading, error } = useModularFetch(id ? `/api/galleries3d/${id}` : null);

  // Gestion des états de chargement et d'erreur
  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur: {error.message}</p>;

  return (
    <div>
      <h1>Visualisation 3D du projet: {gallery.galleryTitle}</h1>
      <ThreeDViewer modelPath={`/assets/3d/${gallery.obj}.obj`} />
    </div>
  );
}
