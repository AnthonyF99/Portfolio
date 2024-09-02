import dbConnect from '../../../lib/dbConnect';
import Article from '../../../models/Article';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const articles = await Article.find();
      console.log("article récupérés :", articles);
      res.status(200).json(articles);
    } catch (error) {
      console.error("Erreur lors de la récupération des article :", error);
      res.status(500).json({ error: 'Échec de la récupération des article' });
    }
  } else if (req.method === 'POST') {
    const { title, description, url, category} = req.body;
    try {
      const newArticle = new Article({ title, description, url, category });
      await newArticle.save();
      console.log("Article enregistré avec succès");
      res.status(200).json({ done: true });
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du article :", error);
      res.status(500).json({ error: 'Échec de l\'enregistrement du article' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
