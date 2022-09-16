import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import MainAbout from './component/MainAbout';
import MainIdentity from './component/MainIdentity';
import MainPortfolio from './component/MainPortfolio';
import MainPress from './component/MainPress';
import MainMap from './component/MainMap';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className='Wrap'>
      <Header />
      <main>
        <MainVisual />
        <MainAbout />
        <MainIdentity />
        <MainPortfolio />
        <MainPress />
        <MainMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
