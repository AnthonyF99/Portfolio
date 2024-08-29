/* pages/api/auth/signup.js
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      // Vérifier si l'utilisateur existe déjà
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: 'Utilisateur déjà existant.' });
      }

      // Hacher le mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);

      // Créer un nouvel utilisateur
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();

      res.status(201).json({ message: 'Utilisateur créé avec succès.' });
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de l\'inscription.' });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
  */
