// pages/api/auth/login.js
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie'; // Pour gérer les cookies

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res
          .status(401)
          .json({ message: "Nom d'utilisateur ou mot de passe incorrect." });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ message: "Nom d'utilisateur ou mot de passe incorrect." });
      }

      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      // Définir le cookie HTTP-only
      res.setHeader(
        'Set-Cookie',
        serialize('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production', // Utiliser HTTPS en production
          maxAge: 3600, // 1 heure
          path: '/',
        }),
      );

      res.status(200).json({ message: 'Connexion réussie' });
    } catch (error) {
      res.status(500).json({ error: "Échec de l'authentification" });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
