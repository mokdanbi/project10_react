import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import { Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import Company from './pages/Company';
import Estimate from './pages/Estimate';
import Work from './pages/Work';
import Pr from './pages/Pr';

const App = () => {
  return (
    <div className='Wrap'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/company' element={<Company />} />
        <Route path='/work' element={<Work />} />
        <Route path='/estimate' element={<Estimate />} />
        <Route path='/pr' element={<Pr />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
