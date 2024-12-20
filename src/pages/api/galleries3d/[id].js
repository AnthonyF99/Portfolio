import dbConnect from '../../../lib/dbConnect';
import Gallery3d from '../../../models/Gallery3d';

export default async function handler(req, res) {
  const { id } = req.query; // L'ID doit venir de la query string
  await dbConnect();

  switch (req.method) {
    case 'PUT':
      const { galleryImageurl, galleryTitle, galleryDescription, obj } =
        req.body;
      try {
        const updatedGallery3d = await Gallery3d.findByIdAndUpdate(
          id,
          { galleryImageurl, galleryTitle, galleryDescription, obj },
          { new: true },
        );
        if (!updatedGallery3d) {
          return res.status(404).json({ error: 'Gallery3d non trouvé' });
        }
        console.log('Gallery3d mis à jour avec succès');
        res.status(200).json(updatedGallery3d); // Retourne le Gallery3d mis à jour
      } catch (error) {
        console.error('Erreur lors de la mise à jour du Gallery3d :', error);
        res.status(500).json({ error: 'Échec de la mise à jour du Gallery3d' });
      }
      break;

    case 'DELETE':
      try {
        const deletedGallery3d = await Gallery3d.findByIdAndDelete(id);
        if (!deletedGallery3d) {
          return res.status(404).json({ error: 'Gallery3d non trouvé' });
        }
        console.log('Gallery3d supprimé avec succès');
        res.status(204).end(); // No content
      } catch (error) {
        console.error('Erreur lors de la suppression du Gallery3d :', error);
        res.status(500).json({ error: 'Échec de la suppression du Gallery3d' });
      }
      break;

    case 'GET':
      try {
        const gallery = await Gallery3d.findById(id);
        if (!gallery) {
          return res.status(404).json({ error: 'Gallery3d non trouvé' });
        }
        res.status(200).json(gallery);
      } catch (error) {
        console.error('Erreur lors de la récupération de la galerie :', error);
        res
          .status(500)
          .json({ error: 'Échec de la récupération de la galerie' });
      }
      break;

    default:
      res.status(405).json({ message: 'Méthode non autorisée' });
      break;
  }
}
