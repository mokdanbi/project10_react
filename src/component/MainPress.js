import { useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

const PRESS = [
  { id: 1, title: "ANNUAL INTERIOR DETAIL", link: "/pr" },
  { id: 2, title: "101-THEME HOUSE III", link: "/pr" },
  { id: 3, title: "MARU | OCTOBER", link: "/pr" },
  { id: 4, title: "L-DATAIL | D6", link: "/pr" },
  { id: 5, title: "INTERNI & DECOR | OCTOBER", link: "/pr" },
  { id: 6, title: "L-DATAIL | D1", link: "/pr" },
  { id: 7, title: "INTERNI & DECOR | NOVEMBER", link: "/pr" }
]
export { PRESS };

const MainPress = () => {
  const [slideNum, setSlideNum] = useState(0);
  const SLIDE = useRef(null);
  const setting = {
    slidesToShow: 4,
    arrows: false,
    dots: false,
    ref: SLIDE,
    afterChange: index => setSlideNum(index)
  }
  return (
    <section className="MainPress">
      <div className="container">
        <h2>Press<br />Release</h2>
      </div>
      <div className="inner">
        <Slider {...setting} className="PSlider">
          {
            PRESS.map((press, idx) => {
              return (
                <figure key={press.id} className={slideNum === idx ? 'on' : ''}>
                  <Link to={press.link}>
                    <div className="box">
                      <img src={process.env.PUBLIC_URL + "/img/press0" + press.id + ".jpg"} alt="" />
                    </div>
                    <div className="tit">
                      {press.title}
                    </div>
                  </Link>
                </figure>
              )
            })
          }
        </Slider>
        <div className="arrows">
          <div className="num">
            0{slideNum + 1} <span>/ 0{PRESS.length}</span>
          </div>
          <i className="xi-arrow-left"
            onClick={() => SLIDE.current.slickPrev()}></i>
          <i className="xi-arrow-right"
            onClick={() => SLIDE.current.slickNext()}></i>
        </div>
      </div>
    </section>
  )
}

export default MainPress;