import React from 'react'
import MainVisual from './MainVisual';
import MainAbout from './MainAbout';
import MainIdentity from './MainIdentity';
import MainPortfolio from './MainPortfolio';
import MainPress from './MainPress';
import MainMap from './MainMap';

const Main = () => {
  return (
    <div className='main'>
      <MainVisual />
      <MainAbout />
      <MainIdentity />
      <MainPortfolio />
      <MainPress />
      <MainMap />
    </div>
  )
}

export default Main