import dbConnect from '../../../lib/dbConnect';
import Gallery3d from '../../../models/Gallery3d';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const Gallery3ds = await Gallery3d.find();
      console.log("gallerie récupérés :", Gallery3ds);
      res.status(200).json(Gallery3ds);
    } catch (error) {
      console.error("Erreur lors de la récupération des gallerie :", error);
      res.status(500).json({ error: 'Échec de la récupération des gallerie' });
    }
  } else if (req.method === 'POST') {
    const { imageurl, title, description, link} = req.body;
    try {
      const newGallery3d = new Gallery3d({ imageurl, title, description, link });
      await newGallery3d.save();
      console.log("gallerie avec succès");
      res.status(200).json({ done: true });
    } catch (error) {
      console.error("Erreur lors de l'enregistrement de gallerie:", error);
      res.status(500).json({ error: 'Échec de l\'enregistrement du gallerie' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
