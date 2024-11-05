import dbConnect from '../../../lib/dbConnect';
import Project from '../../../models/Project';

export default async function handler(req, res) {
  const { id } = req.query; // L'ID doit venir de la query string
  await dbConnect();

  switch (req.method) {
    case 'PUT':
      const { title, description, imageurl, more, skills, link, websitelink } =
        req.body;
      try {
        const updatedProject = await Project.findByIdAndUpdate(
          id,
          { title, description, imageurl, more, skills, link, websitelink },
          { new: true },
        );
        if (!updatedProject) {
          return res.status(404).json({ error: 'Projet non trouvé' });
        }
        console.log('Projet mis à jour avec succès');
        res.status(200).json(updatedProject); // Retourne le projet mis à jour
      } catch (error) {
        console.error('Erreur lors de la mise à jour du projet :', error);
        res.status(500).json({ error: 'Échec de la mise à jour du projet' });
      }
      break;

    case 'DELETE':
      try {
        const deletedProject = await Project.findByIdAndDelete(id);
        if (!deletedProject) {
          return res.status(404).json({ error: 'Projet non trouvé' });
        }
        console.log('Projet supprimé avec succès');
        res.status(204).end(); // No content
      } catch (error) {
        console.error('Erreur lors de la suppression du projet :', error);
        res.status(500).json({ error: 'Échec de la suppression du projet' });
      }
      break;

    default:
      res.status(405).json({ message: 'Méthode non autorisée' });
      break;
  }
}
