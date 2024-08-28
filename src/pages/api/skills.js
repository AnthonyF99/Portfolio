import dbConnect from '../../lib/dbConnect';
import Skill from '../../models/Skills';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const skills = await Skill.find();
      console.log("skills récupérés :", skills);
      res.status(200).json(skills);
    } catch (error) {
      console.error("Erreur lors de la récupération des skills :", error);
      res.status(500).json({ error: 'Échec de la récupération des skills' });
    }
  } else if (req.method === 'POST') {
    const { title, url, category } = req.body;
    try {
      const newSkill = new Skill({ title, url, category });
      await newSkill.save();
      console.log("Skill enregistré avec succès");
      res.status(200).json({ done: true });
    } catch (error) {
      console.error("Erreur lors de l'enregistrement du skill :", error);
      res.status(500).json({ error: 'Échec de l\'enregistrement du skill' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
