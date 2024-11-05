import '../styles/globals.scss';
import Gallery from '../components/gallery/gallery.jsx';
import Header from '../components/Header/header.jsx';

export default function Hobbies() {
  return (
    <main className="main">
      <Header />
      <div className="container">
        <Gallery />
      </div>
    </main>
  );
}
