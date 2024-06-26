import GalleryModal from '../gallery-modal';
import './slider.scss'
import Slider from "react-slick";

export default function ImageSlide({ data }: any) {
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

  return (
    <>
      <div className='image-slider mt-5'>
        <h1 className="section-title">Gallery Image</h1>
        {/* <div className="slider-lg">
          <Slider {...settings}>
            {
              data?.map((item: any, index: number) => {
                return (
                  <div key={index} className="slider-card-section">
                    {
                      item?.isMulti ?
                        <div className='multi-img-sec'>
                          {
                            item?.img?.map((image: any, indx: number) => {
                              if (indx < 4)
                                return (
                                  <div className="img-sec" key={indx} onClick={() => handleClick(index)}>
                                    <div className="image-overlay">
                                      <span>Preview</span>
                                    </div>
                                    <img src={image} alt="" />
                                  </div>
                                )
                            })
                          }
                        </div>
                        :
                        <div className="single-img-sec" onClick={() => handleClick(index)}>
                          <div className="image-overlay">
                            <span>Preview</span>
                          </div>
                          <img src={item.img} alt="" />
                        </div>
                    }

                  </div>
                )
              })
            }
          </Slider>
        </div> */}

      </div>
      
      <GalleryModal data={data} />
    </>
  );
}
