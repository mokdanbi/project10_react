import React from 'react'
import '../css/Pr.scss'
import { PRESS } from '../component/MainPress'
import { Link } from 'react-router-dom'

const Pr = () => {
  return (
    <div className="subpage">
      <div className="subtitle subpr">
        <h2>PRESS RELEASE</h2>
      </div>
      <div className="press">
        {
          PRESS.map((it, idx) => {
            return (
              <figure key={it.id}>
                <Link to={it.link}>
                  <div className="box">
                    <img src={process.env.PUBLIC_URL + "/img/press0" + it.id + ".jpg"} alt="" />
                  </div>
                  <div className="tit">
                    {it.title}
                  </div>
                </Link>
              </figure>
            )
          })
        }
      </div>
    </div>
  )
}

export default Pr