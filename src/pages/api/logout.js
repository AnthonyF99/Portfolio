// pages/api/logout.js
import { serialize } from 'cookie';

export default function handler(req, res) {
  res.setHeader('Set-Cookie', serialize('token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0, // Supprimer le cookie
    path: '/',
  }));
  res.status(200).json({ message: 'Déconnecté avec succès' });
}
