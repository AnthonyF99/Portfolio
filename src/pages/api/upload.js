import fs from 'fs';
import path from 'path';
import { IncomingForm } from 'formidable'; // Utilisation de 'formidable' pour parser les formulaires multipart, sans multer.

export const config = {
  api: {
    bodyParser: false, // Désactive le parsing automatique des données par Next.js
  },
};

export default function handler(req, res) {
  if (req.method === 'POST') {
    const form = new IncomingForm();
    form.uploadDir = path.join(process.cwd(), '/public/uploads');
    form.keepExtensions = true; // Pour garder l'extension originale du fichier

    // Crée le dossier public/uploads s'il n'existe pas déjà
    if (!fs.existsSync(form.uploadDir)) {
      fs.mkdirSync(form.uploadDir, { recursive: true });
    }

    // Parse les données du formulaire
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error('Erreur de parsing du formulaire:', err);
        return res
          .status(500)
          .json({ error: 'Erreur lors du traitement du fichier.' });
      }

      // Vérifie si le fichier a bien été téléchargé
      const uploadedFile = files.file && files.file[0];
      if (!uploadedFile) {
        return res
          .status(400)
          .json({ error: 'Aucun fichier trouvé dans la requête.' });
      }

      const fileName = `image-${Date.now()}.webp`; // Exemple de nom généré
      const filePath = path.join(form.uploadDir, fileName);

      // Déplacer le fichier dans le répertoire approprié
      fs.renameSync(uploadedFile.filepath, filePath);

      // Répondre avec l'URL du fichier
      res.status(200).json({
        message: 'Fichier uploadé avec succès.',
        imageUrl: `/uploads/${fileName}`,
      });
    });
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
}
