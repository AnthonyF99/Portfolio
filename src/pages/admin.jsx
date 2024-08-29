import '../styles/globals.scss';
import Header from '../components/Header/header.jsx';
import Dashboard from '../components/Dashboard/dashboard.jsx';


export default function Admin() {
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
        <div className="dashboard-container">
          <Dashboard/>
        </div>
      </main>
    </>
  );
}