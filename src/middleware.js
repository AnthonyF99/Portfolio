// middleware.js
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function middleware(request) {
  const token = request.cookies.get('token'); // Récupérer le token des cookies
  const url = request.nextUrl.clone()

  if (!token) {
    url.pathname = '/login'
    return NextResponse.rewrite(url)
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    request.user = user; // Attacher les informations utilisateur à la requête
    return NextResponse.next();
  } catch (error) {
    return NextResponse.rewrite(url)
  }
}

export const config = {
  matcher: ['/admin/:path*'], // Appliquer ce middleware uniquement pour les routes admin
};
