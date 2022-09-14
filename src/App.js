import './App.css';
import Header from './component/Header';
import MainVisual from './component/MainVisual';
import MainAbout from './component/MainAbout';
import MainIdentity from './component/MainIdentity';
import MainPortfolio from './component/MainPortfolio';

const App = () => {
  return (
    <div className='Wrap'>
      <Header />
      <main>
        <MainVisual />
        <MainAbout />
        <MainIdentity />
        <MainPortfolio />
      </main>
    </div>
  );
}

export default App;
