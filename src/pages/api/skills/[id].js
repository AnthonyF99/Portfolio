import dbConnect from '../../../lib/dbConnect';
import Skill from '../../../models/Skills';

export default async function handler(req, res) {
  const { id } = req.query; // L'ID doit venir de la query string
  await dbConnect();

  switch (req.method) {
    case 'PUT':
      const { title, url, category } = req.body;
      try {
        const updatedSkill = await Skill.findByIdAndUpdate(
          id,
          { title, url, category },
          { new: true },
        );
        if (!updatedSkill) {
          return res.status(404).json({ error: 'Skill non trouvé' });
        }
        console.log('Skill mis à jour avec succès');
        res.status(200).json(updatedSkill); // Retourne le Skill mis à jour
      } catch (error) {
        console.error('Erreur lors de la mise à jour du Skill :', error);
        res.status(500).json({ error: 'Échec de la mise à jour du Skill' });
      }
      break;

    case 'DELETE':
      try {
        const deletedSkill = await Skill.findByIdAndDelete(id);
        if (!deletedSkill) {
          return res.status(404).json({ error: 'Skill non trouvé' });
        }
        console.log('Skill supprimé avec succès');
        res.status(204).end(); // No content
      } catch (error) {
        console.error('Erreur lors de la suppression du Skill :', error);
        res.status(500).json({ error: 'Échec de la suppression du Skill' });
      }
      break;

    default:
      res.status(405).json({ message: 'Méthode non autorisée' });
      break;
  }
}
