import '../styles/globals.scss';
import Gallery from '../components/gallery/gallery.jsx';
import Header from '../components/Header/header.jsx';

export default function Hobbies() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="hobbies-container">
          <Gallery />
        </div>
      </main>
    </>
  );
}
