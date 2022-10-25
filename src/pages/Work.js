import React from 'react'
import '../css/Work.scss'
import Tabmenu from './Tabmenu';

const Work = () => {
  return (
    <div className="subpage">
      <div className="subtitle subwork">
        <h2>INTERIOR PROJECT</h2>
      </div>
      <div className="worktab">
        <Tabmenu />
      </div>
    </div>
  )
}

export default Work