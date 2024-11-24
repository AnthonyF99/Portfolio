import dbConnect from '../../../lib/dbConnect';
import Project from '../../../models/Project';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const projects = await Project.find();
        console.log('Projets récupérés :', projects);
        res.status(200).json(projects);
      } catch (error) {
        console.error('Erreur lors de la récupération des projets :', error);
        res.status(500).json({ error: 'Échec de la récupération des projets' });
      }
      break;

    case 'POST':
      const { title, description, imageurl, more, skills, link, websitelink } =
        req.body;
      try {
        const newProject = new Project({
          title,
          description,
          imageurl,
          more,
          skills,
          link,
          websitelink,
        });
        await newProject.save();
        console.log('Projet enregistré avec succès');
        res.status(201).json(newProject); // Retourne le projet créé
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
