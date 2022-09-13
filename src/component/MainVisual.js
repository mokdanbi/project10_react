import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainVisual = () => {
    return (
        <section className='MainVisual'>
            <Slider>
                <div className='main01'></div>
                <div className='main02'></div>
            </Slider>
        </section>
    )
}

export default MainVisual;