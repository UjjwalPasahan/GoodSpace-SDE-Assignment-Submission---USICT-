import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/IconCarousel .scss';
import hotjar from '../assets/hotjar.png'

const features = [
  { icon: hotjar },
  { icon: hotjar },
  { icon: hotjar },
  { icon: hotjar },
  { icon: hotjar },
  { icon: hotjar },
  { icon: hotjar },
  { icon: hotjar }
];

const IconCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="icon-carousel custom-border">
      <div className="icon-carousel__trust">
          <p>USED BY OVER 50 ENTERPRISES</p>
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div key={index} className="icon-carousel__item">
            <div className="icon-carousel__icon"><img src={feature.icon} /></div>
          </div>
        ))}
      </Slider>
        </div>
    </section>
  );
};

export default IconCarousel;