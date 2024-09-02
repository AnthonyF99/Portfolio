// lib/auth.js
import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
  // Le token doit être passé dans les en-têtes de la requête, typiquement dans 'Authorization'
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Extrait le token du header "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Accès non autorisé.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attache les informations décodées du token à la requête
    next();
  } catch (error) {
    res.status(403).json({ message: 'Token invalide.' });
  }
}
