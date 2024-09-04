import dbConnect from '../../../lib/dbConnect';
import Cv from '../../../models/Cv';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const cvs = await Cv.find();
      console.log("formations/experience récupérés :", cvs);
      res.status(200).json(cvs);
    } catch (error) {
      console.error("Erreur lors de la récupération des formations/experience :", error);
      res.status(500).json({ error: 'Échec de la récupération des formations/experience' });
    }
  } else if (req.method === 'POST') {
    const { title, date, description, category} = req.body;
    try {
      const newCv = new Cv({ title, date, description, category });
      await newCv.save();
      console.log("formation /experienceenregistré avec succès");
      res.status(200).json({ done: true });
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du formation /experience:", error);
      res.status(500).json({ error: 'Échec de l\'enregistrement du formation/experience' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
