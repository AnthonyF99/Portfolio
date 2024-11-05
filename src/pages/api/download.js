import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const filePath = path.resolve('./public/assets/Cv/Mycv.pdf');

    // Vérification si le fichier existe
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'Fichier non trouvé' });
    }

    const fileBuffer = fs.readFileSync(filePath);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Mycv.pdf');
    res.status(200).send(fileBuffer); // Assure-toi d'envoyer le statut 200
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
