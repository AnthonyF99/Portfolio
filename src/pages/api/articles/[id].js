import dbConnect from '../../../lib/dbConnect';
import Article from '../../../models/Article';

export default async function handler(req, res) {
  const { id } = req.query; // L'ID doit venir de la query string
  await dbConnect();

  switch (req.method) {
    case 'PUT':
      const { title, description, url, category } = req.body;
      try {
        const updatedArticle = await Article.findByIdAndUpdate(
          id,
          { title, description, url, category },
          { new: true }
        );
        if (!updatedArticle) {
          return res.status(404).json({ error: 'Article non trouvé' });
        }
        console.log("Article mis à jour avec succès");
        res.status(200).json(updatedArticle); // Retourne le Article mis à jour
      } catch (error) {
        console.error("Erreur lors de la mise à jour du Article :", error);
        res.status(500).json({ error: 'Échec de la mise à jour du Article' });
      }
      break;

    case 'DELETE':
      try {
        const deletedArticle = await Article.findByIdAndDelete(id);
        if (!deletedArticle) {
          return res.status(404).json({ error: 'Article non trouvé' });
        }
        console.log("Article supprimé avec succès");
        res.status(204).end(); // No content
      } catch (error) {
        console.error("Erreur lors de la suppression du Article :", error);
        res.status(500).json({ error: 'Échec de la suppression du Article' });
      }
      break;

    default:
      res.status(405).json({ message: 'Méthode non autorisée' });
      break;
  }
}
