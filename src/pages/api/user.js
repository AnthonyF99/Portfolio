// pages/api/user.js
import jwt from 'jsonwebtoken';

export default function handler(req, res) {
  const { token } = req.cookies; // Récupérer le token des cookies

  if (!token) {
    return res.status(401).json({ message: 'Non autorisé' });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET); // Vérifier et décoder le token
    res.status(200).json({ userId: user.userId }); // Retourner les informations utilisateur
  } catch (error) {
    res.status(401).json({ message: 'Token invalide' });
  }
}
