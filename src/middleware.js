// middleware.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(request) {
  const token = request.cookies.get('token'); // Récupérer le token des cookies

  if (!token) {
    return NextResponse.redirect('/login');
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    request.user = user; // Attacher les informations utilisateur à la requête
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect('/login');
  }
}

export const config = {
  matcher: ['/admin/:path*'], // Appliquer ce middleware uniquement pour les routes admin
};
