import dbConnect from '../../lib/dbConnect';
import Cv from '../../models/Cv';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const cvs = await Cv.find();
      console.log("Projets récupérés :", cvs);
      res.status(200).json(cvs);
    } catch (error) {
      console.error("Erreur lors de la récupération des projets :", error);
      res.status(500).json({ error: 'Échec de la récupération des projets' });
    }
  } else if (req.method === 'POST') {
    const { title, description, imageurl, more, skills, link } = req.body;
    try {
      const newCv = new Cv({ title, description, imageurl, more, skills, link });
      await newCv.save();
      console.log("Projet enregistré avec succès");
      res.status(200).json({ done: true });
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du projet :", error);
      res.status(500).json({ error: 'Échec de l\'enregistrement du projet' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
