import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainVisual = () => {
    return (
        <section className='MainVisual'>
            <div className="mainTitle">
                <h2>MIDAS<br /> INTERIOR</h2>
                <p>Midas Interior focuses on design works<br />
                    at the intersection of architecture,<br />
                    branding and new technologies.</p>
            </div>
            <Slider autoplay={true} className='mainSlider'>
                <img src={process.env.PUBLIC_URL + "/img/main01.jpg"} alt="" />
                <img src={process.env.PUBLIC_URL + "/img/main02.jpg"} alt="" />
            </Slider>
        </section>
    )
}

export default MainVisual;