import './slider.scss'
import Slider from "react-slick";

export default function VideoSlide({ data }: any) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  var settingsSm = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleClick = (index: number) => {

  }
  return (
    <>
      <div className='video-slider mt-5'>
        <h1 className="section-title">Video Gallery</h1>
        <div className="slider-lg">
        <Slider {...settings}>
          {
            data?.map((item: any, index: number) => {
              return (
                <div key={index} className="video-card-section">
                  <iframe
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                    loading="lazy"
                    src={item.url}>
                  </iframe>
                </div>
              )
            })
          }
        </Slider>
        </div>
        <div className="slider-sm">
        <Slider {...settingsSm}>
          {
            data?.map((item: any, index: number) => {
              return (
                <div key={index} className="video-card-section">
                  <iframe
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen={true}
                    loading="lazy"
                    src={item.url}>
                  </iframe>
                </div>
              )
            })
          }
        </Slider>
        </div>
        
      </div>
    </>
  );
}
