import './slider.scss'
import Slider from "react-slick";

export default function BlogSlide({ data }: any) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true
  };
  return (
    <div className='mt-5'>
      <h1 className="section-title">Blog</h1>

      <Slider {...settings}>
        {
          data?.map((item: any, index: number) => {
            return (
              <div key={index} className="slider-card-section">
                <figure className="shape-box shape-box_half">
                  <img src={item.img} alt="" />
                  <div className="brk-abs-overlay z-index-0 bg-black opacity-60"></div>
                  <figcaption>
                    <div className="show-cont">
                      {/* <h3 className="card-no">01</h3> */}
                      <h4 className="card-main-title">{item.title}</h4>
                    </div>
                    <p className="card-content">{item.description}</p>
                    <a href="#" className="read-more-btn">Read More</a>
                  </figcaption>
                  <span className="after"></span>
                </figure>
              </div>
            )
          })
        }

      </Slider>
    </div>
  );
}
