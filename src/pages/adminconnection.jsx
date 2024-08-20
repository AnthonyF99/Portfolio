import '../styles/globals.scss';
import Header from '../components/Header/header.jsx';
import Adminform from '../components/Admin/adminform.jsx';


export default function Adminloginpage() {
    return (
      <>
      <header>
        <Header/>
      </header>
      <main>
      <div>
          <section id="form">
            <Adminform/>
          </section>
      </div>
    </main>
    </>
    );
  }