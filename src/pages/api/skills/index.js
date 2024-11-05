import dbConnect from '../../../lib/dbConnect';
import Skill from '../../../models/Skills';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const skills = await Skill.find();
        console.log('Projets récupérés :', skills);
        res.status(200).json(skills);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets :', error);
        res.status(500).json({ error: 'Échec de la récupération des projets' });
      }
      break;

    case 'POST':
      const { title, url, category } = req.body;
      try {
        const newSkill = new Skill({ title, url, category });
        await newSkill.save();
        console.log('Projet enregistré avec succès');
        res.status(201).json(newSkill); // Retourne le projet créé
      } catch (error) {
        console.error("Erreur lors de l'enregistrement du projet :", error);
        res.status(500).json({ error: "Échec de l'enregistrement du projet" });
      }
      break;

    default:
      res.status(405).json({ message: 'Méthode non autorisée' });
      break;
  }
}
