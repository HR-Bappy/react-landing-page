import { useState } from 'react'
import './gallery-modal.scss'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'


const GalleryModal = ({ data }: any) => {

    const [activeImage, setActiveImage] = useState<any>({ index: 0, view: -1 })

    const handleClick = (index: number) => {
        console.log('index', index)
        var modal: any = document.getElementById('myModal');

        var modalImg: any = document.getElementById("img01");
        var captionText: any = document.getElementById("caption");
        let showImage = data


        modal.style.display = "block";
        if (showImage[index]?.isMulti) {
            modalImg.src = showImage[index]?.img[0];
            modalImg.alt = showImage[index]?.title;
            setActiveImage({ index: index, view: 0 })
        }
        else {

            modalImg.src = showImage[index]?.img;
            modalImg.alt = showImage[index]?.title;
            setActiveImage({ index: index, view: -1 })
        }

        captionText.innerHTML = showImage[index]?.title;
    }

    const handleClose = () => {
        var modal: any = document.getElementById('myModal');

        modal.style.display = "none";
    }

    const onClickArrow = (viewImg: any) => {
        var modal: any = document.getElementById('myModal');

        var modalImg: any = document.getElementById("img01");
        var captionText: any = document.getElementById("caption");
        let showImage = data


        modal.style.display = "block";
        if (showImage[viewImg?.index]?.isMulti) {
            if (viewImg?.view < 0) {

                modalImg.src = showImage[viewImg?.index]?.img[0];
                modalImg.alt = showImage[viewImg?.index]?.title;
                setActiveImage({ index: viewImg?.index, view: 0 })
            }
            else if (viewImg?.view <= showImage[viewImg?.index]?.img?.length) {

                modalImg.src = showImage[viewImg?.index]?.img[showImage.view];
                modalImg.alt = showImage[viewImg?.index]?.title;
                setActiveImage({ index: viewImg?.index, view: showImage.view })
            }
            else {

                modalImg.src = showImage[viewImg?.index]?.img[showImage[viewImg?.index]?.img?.length - 1];
                modalImg.alt = showImage[viewImg?.index]?.title;
                setActiveImage({ index: viewImg?.index, view: showImage.view })
            }
        }
        else {
            if (showImage[viewImg.index] < 0) {

                modalImg.src = showImage[0]?.img;
                modalImg.alt = showImage[0]?.title;
                setActiveImage({ index: 0, view: -1 })
            }
            else if (showImage[viewImg.index] <= showImage?.length) {

                modalImg.src = showImage[viewImg.index]?.img;
                modalImg.alt = showImage[viewImg.index]?.title;
                setActiveImage({ index: viewImg.index, view: -1 })
            }
            else {

                modalImg.src = showImage[viewImg.length - 1]?.img;
                modalImg.alt = showImage[viewImg.length - 1]?.title;
                setActiveImage({ index: viewImg.length - 1, view: -1 })
            }
        }

        captionText.innerHTML = showImage[viewImg.index]?.title;
    }


    return (
        <div className="gallery-modal">

            <div className='modal__ '>
                <h2 style={{ textAlign: "center" }}>Advanced Image Gallery</h2>
                <div className="row">
                    {

                        data?.map((item: any, index: number) => {
                            return (

                                <div key={index} className="col-md-3 image-main-section mb-2">
                                    {
                                        item?.isMulti ?
                                            <div className="img">
                                                <div className=' multi-img-sec '>
                                                    {
                                                        item?.img?.map((image: any, indx: number) => {
                                                            if (indx < 3)
                                                                return (
                                                                    <div className=" img-sec" key={indx} onClick={() => handleClick(index)}>

                                                                        <img src={image} alt="" />
                                                                    </div>
                                                                )
                                                            else if (indx == 3)
                                                                return (
                                                                    <div className=" img-sec " key={indx} onClick={() => handleClick(index)}>

                                                                        <img src={image} className='blur-img' alt="" />
                                                                        <div className='image-overlay'>{item?.img?.length} +</div>
                                                                    </div>
                                                                )
                                                            else return (<></>)
                                                        })
                                                    }
                                                </div>
                                                <div className="desc">{item?.title}</div>
                                            </div>
                                            :
                                            <div className="img" onClick={() => handleClick(index)}>
                                                <img src={item?.img} alt="Trolltunga Norway" width="300" height="200" />
                                                <div className="desc">{item?.title}</div>
                                            </div>
                                    }

                                </div>
                            )
                        })
                    }
                </div>




                <div className="clearfix"></div>

                <div id="myModal" className="modal">
                    <span className="close" onClick={handleClose}>×</span>
                    <div className="modal-content">
                        <img id="img01" />
                    </div>
                    <div id="caption"></div>
                    <div className="control-arrow">
                        <IoMdArrowDropleft className='left-arrow' onClick={() => onClickArrow({ index: activeImage.index, view: activeImage.view + 1 })} />
                        <IoMdArrowDropright className='right-arrow' onClick={() => onClickArrow({ index: activeImage.index, view: activeImage.view - 1 })} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GalleryModal