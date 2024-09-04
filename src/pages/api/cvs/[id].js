import dbConnect from '../../../lib/dbConnect';
import Cv from '../../../models/Cv';

export default async function handler(req, res) {
  const { id } = req.query; // L'ID doit venir de la query string
  await dbConnect();

  switch (req.method) {
    case 'PUT':
      const { title, date, description, category } = req.body;
      try {
        const updatedCv = await Cv.findByIdAndUpdate(
          id,
          { title, date, description, category },
          { new: true }
        );
        if (!updatedCv) {
          return res.status(404).json({ error: 'Cv non trouvé' });
        }
        console.log("Cv mis à jour avec succès");
        res.status(200).json(updatedCv); // Retourne le Cv mis à jour
      } catch (error) {
        console.error("Erreur lors de la mise à jour du Cv :", error);
        res.status(500).json({ error: 'Échec de la mise à jour du Cv' });
      }
      break;

    case 'DELETE':
      try {
        const deletedCv = await Cv.findByIdAndDelete(id);
        if (!deletedCv) {
          return res.status(404).json({ error: 'Cv non trouvé' });
        }
        console.log("Cv supprimé avec succès");
        res.status(204).end(); // No content
      } catch (error) {
        console.error("Erreur lors de la suppression du Cv :", error);
        res.status(500).json({ error: 'Échec de la suppression du Cv' });
      }
      break;

    default:
      res.status(405).json({ message: 'Méthode non autorisée' });
      break;
  }
}
