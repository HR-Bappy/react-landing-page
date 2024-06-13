import { Link } from 'react-router-dom';
import './login.scss'
import { FaPlayCircle } from "react-icons/fa";

const data = [
    {
        id: 1,
        title: 'পুরুষ',
        content: {
            title: 'কর্মরত পুরুষ কর্মচারী (২০২২)',
            list: ["মন্ত্রণালয় ও বিভাগ ১২১৪৭",
                " অধিদপ্তর ও দপ্তর ৭৫৯৫৬৮",
                " কর্পোরেশন ও স্বায়ত্তশাসিত সংস্থা ২১৫৯৬৪",
                " মোট ৯৮৭৬৭৯"]
        }
    },
    {
        id: 2,
        title: 'মহিলা',
        content: {
            title: 'কর্মরত মহিলা কর্মচারী (২০২২)',
            list: ["মন্ত্রণালয় ও বিভাগ ২৭৪১",
                "অধিদপ্তর ও দপ্তর ৩৬৪৮৪০",
                "কর্পোরেশন ও স্বায়ত্তশাসিত সংস্থা ৪১৫৫৮",
                "মোট ৪০৯১৩৯"]
        }
    }, {
        id: 3,
        title: 'গ্রেডভিত্তিক পদসংখ্যা',
        content: {
            title: 'গ্রেডভিত্তিক পদসংখ্যা',
            list: ["গ্রেড ১ - ৬০০",
                "গ্রেড ২ - ২৭৯১",
                "গ্রেড ৩ - ৭৮৪৮",
                "গ্রেড ৪ - ১২২২৬",
                "গ্রেড ৫- ২২৩০০",
                "গ্রেড ৬ - ৫২৭৭৪",
                "গ্রেড ৭ - ৪৩২৮",
                "গ্রেড ৮ - ২১৭৮",
                "গ্রেড ৯ - ১৩৯০৫১",
                " মোট - ২৪৪০৯৬"]
        }
    }, {
        id: 4,
        title: 'অধিদপ্তর ও দপ্তর',
        content: {
            title: 'সালভিত্তিক কর্মচারী পরিসংখ্যান',
            list: ["২০১৮ সাল ১১০৫৩৯১ জন",
                "২০১৯ সাল ১১৪৩৭৬৫ জন",
                "২০২০ সাল ১২০৮৪৭২ জন",
                "২০২১ সাল ১১৮৪৪৫৭ জন",
                "২০২২ সাল ১১২৪৪০৮ জন"]
        }
    }, {
        id: 5,
        title: 'মন্ত্রণালয় ও বিভাগ কর্মচারী ও কল্যাণ  পেনশন',
        content: {
            title: 'কর্মরত পুরুষ কর্মচারী (২০২২)',
            list: ["মন্ত্রণালয় ও বিভাগ ১২১৪৭",
                " অধিদপ্তর ও দপ্তর ৭৫৯৫৬৮",
                " কর্পোরেশন ও স্বায়ত্তশাসিত সংস্থা ২১৫৯৬৪",
                " মোট ৯৮৭৬৭৯"]
        }
    }
]

const newsList = [
    {
        id:1,
        title:'Digitalizing Lives Towards Smart Bangladesh',
        link:''
    },{
        id:1,
        title:'A Global Pledge for Zero Digital Divide',
        link:''
    },{
        id:1,
        title:'Smart Education Accelerator',
        link:''
    },{
        id:1,
        title:'e-Quailty Centre for Inclusive Innovation',
        link:''
    },{
        id:1,
        title:'The a2i Journey: Making Digital Innovation Work for the Poor',
        link:''
    },{
        id:1,
        title:'Digitalizing Lives Towards Smart Bangladesh',
        link:''
    },{
        id:1,
        title:'A Global Pledge for Zero Digital Divide',
        link:''
    },{
        id:1,
        title:'Smart Education Accelerator',
        link:''
    },{
        id:1,
        title:'e-Quailty Centre for Inclusive Innovation',
        link:''
    },{
        id:1,
        title:'The a2i Journey: Making Digital Innovation Work for the Poor',
        link:''
    },{
        id:1,
        title:'Digitalizing Lives Towards Smart Bangladesh',
        link:''
    },{
        id:1,
        title:'A Global Pledge for Zero Digital Divide',
        link:''
    },{
        id:1,
        title:'Smart Education Accelerator',
        link:''
    },{
        id:1,
        title:'e-Quailty Centre for Inclusive Innovation',
        link:''
    },{
        id:1,
        title:'The a2i Journey: Making Digital Innovation Work for the Poor',
        link:''
    },
]

const Login = () => {

    return (
        <section className="hero-section container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <div className="left-banner">
                        <div className="banner-overlay">
                        </div>
                        <div className="content ">
                            <div className="title">
                                <h2> A Multinational Digital Transformation Catalyst from the Government of Bangladesh</h2>
                                <a href="">Watch <FaPlayCircle /></a>
                                <div className="logos">
                                    <img src='/img/header-logo.svg' alt="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="right-banner">
                        <div className="banner-overlay"></div>
                        <div className="login-section glass-bg">
                            <h2>Login</h2>
                            <form className='mt-5' action="">
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <div className="submit-btn">
                                    <button>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="news-section ">
                <div className="container">
                    <div className="row">
                        <div className="d-flex align-items-center py-2">
                            <h3 className=' me-2 mb-0'>TRENDING</h3>
                            <div className="_slider-section w-100">
                                <div className="slider-content" style={{width:`${250*newsList.length}px`}}>
                                    {
                                        newsList?.map((item:any,index:number) => {
                                            return(
                                                <div className="single-item d-flex align-items-center text-center" key={index}>
                                                <Link to=''>
                                                {item?.title??'--'}
                                                </Link>
                                            </div>
                                            )
                                        })
                                    }
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Login