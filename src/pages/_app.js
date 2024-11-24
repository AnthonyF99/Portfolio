import { Exo_2 } from 'next/font/google';

const exo2 = Exo_2({
  weight: '400',
  subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={exo2.className}>
      <Component {...pageProps} />
    </main>
  );
}
