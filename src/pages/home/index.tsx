import Login from '../../components/login/login'
import MissionCard from '../../components/mission-card'
import ServicesCard from '../../components/serevices-card'
import './home.scss'
import { FaChartLine } from "react-icons/fa6";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import BlogSlide from '../../components/blog-slider';
import ImageSlide from '../../components/image-slider';
import VideoSlide from '../../components/video-slider';

const services = [
    {
        id: 1,
        title: ' Billion',
        count: 5.8,
        logo: '/img/services/Service.svg',
        description: 'Services Delivered',
        bgImg: '/img/services/Services1.jpg'
    }, {
        id: 1,
        title: ' Billion',
        count: 12.7,
        logo: '/img/services/Visite.svg',
        description: 'Visits Saved',
        bgImg: '/img/services/Visits1.jpg'
    }, {
        id: 1,
        title: ' Billion',
        count: 19,
        logo: '/img/services/Work.svg',

        description: 'Work Days Saved',
        bgImg: '/img/services/Work1.jpg'
    }, {
        id: 1,
        title: '$ Billion',
        logo: '/img/services/Citizen.svg',
        count: 21.6,
        description: 'Saved by Citizen',
        bgImg: '/img/services/Saved1.jpg'
    }
]
const missions = [
    {
        id: 1,
        title: 'Tracking Lead',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.',
        img: '/img/mission/mission1.jpg',
        icon: <FaChartLine />
    }, {
        id: 1,
        title: 'Advanced Targeting Solution',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.',
        img: '/img/mission/mission2.jpg',
        icon: <FaArrowsDownToPeople />
    }, {
        id: 1,
        title: 'Global Reach & Quality Traffic',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.',
        img: '/img/mission/mission3.jpg',
        icon: <FaGlobe />
    }, {
        id: 1,
        title: 'Flexible Pricing Models',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.',
        img: '/img/mission/mission4.jpg',
        icon: <FaMoneyCheckDollar />
    }, {
        id: 1,
        title: 'Advanced Optimization Technologies & Methodologies',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.',
        img: '/img/mission/mission5.jpg',
        icon: <FaCheckCircle />
    }, {
        id: 1,
        title: 'Dedicated Account Management Team',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.',
        img: '/img/mission/mission6.jpg',
        icon: <FaPeopleGroup />
    },
]
const galleryImages = [
    {
        id: 1,
        title: 'Image content 01',
        img: '/img/mission/mission1.jpg',
    }, {
        id: 1,
        title: 'Image content 02',
        img: ['/img/mission/mission6.jpg', '/img/mission/mission2.jpg', '/img/mission/mission3.jpg', '/img/mission/mission1.jpg', '/img/mission/mission5.jpg'],
        isMulti: true
    }, {
        id: 1,
        title: 'Image content 03',
        img: '/img/mission/mission5.jpg',
    }, {
        id: 1,
        title: 'Image content 04',
        img: '/img/mission/mission4.jpg',
    }, {
        id: 1,
        title: 'Image content 05',
        img: '/img/mission/mission3.jpg',
    }, {
        id: 1,
        title: 'Image content 06',
        img: '/img/mission/mission2.jpg',
    }, {
        id: 1,
        title: 'Image content 07',
        img: '/img/mission/mission6.jpg',
    }, {
        id: 1,
        title: 'Image content 08',
        img: '/img/mission/mission5.jpg',
    }, {
        id: 1,
        title: 'Image content 09',
        img: '/img/mission/mission3.jpg',
    }, {
        id: 1,
        title: 'Image content 10',
        img: '/img/mission/mission1.jpg',
    }
]
const blogs = [
    {
        id: 1,
        title: 'Image content 01',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        img: '/img/mission/mission1.jpg',
    }, {
        id: 1,
        title: 'Image content 02',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        img: '/img/mission/mission6.jpg',
    }, {
        id: 1,
        title: 'Image content 03',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        img: '/img/mission/mission5.jpg',
    }, {
        id: 1,
        title: 'Image content 04',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        img: '/img/mission/mission4.jpg',
    }, {
        id: 1,
        title: 'Image content 05',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        img: '/img/mission/mission3.jpg',
    }, {
        id: 1,
        title: 'Image content 06',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        img: '/img/mission/mission2.jpg',
    }, {
        id: 1,
        title: 'Image content 07',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        img: '/img/mission/mission6.jpg',
    }, {
        id: 1,
        title: 'Image content 08',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        img: '/img/mission/mission5.jpg',
    }, {
        id: 1,
        title: 'Image content 09',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        img: '/img/mission/mission3.jpg',
    }, {
        id: 1,
        title: 'Image content 10',
        description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.',
        img: '/img/mission/mission1.jpg',
    }
]
const videos = [
    {
        id: 1,
        title: 'C++ Programming Language Tutorial | Introduction to Arrays in C++ | GeeksforGeeks',
        url: 'https://www.youtube.com/embed/eOdNhPwOInc?si=9L-0rSllXFl70JOY'
    },
    {
        id: 2,
        title: 'Python Programming Tutorial | Arrays - Part 1 | GeeksforGeeks',
        url: 'https://www.youtube.com/embed/W7X_d0yDdGk?si=y2WgJPj5EjfWAEzs'
    },
    {
        id: 2,
        title: 'Python Programming Tutorial | Arrays - Part 2 | GeeksforGeeks',
        url: 'https://www.youtube.com/embed/21dgNSzG2Iw?si=VSIVWbzkFG-xfJ3J'
    },
    {
        id: 2,
        title: 'Array Rotation | GeeksforGeeks',
        url: 'https://www.youtube.com/embed/viaha1SnpT4?si=t_1ZUQ2avo8YVlxg'
    },
    {
        id: 2,
        title: 'Reversal algorithm for array rotation | GeeksforGeeks',
        url: 'https://www.youtube.com/embed/QOpU9-l5T7Y?si=LN2An_RDGIg2yKsC'
    },
    {
        id: 2,
        title: 'Program to cyclically rotate an array by one | GeeksforGeeks',
        url: 'https://www.youtube.com/embed/ZNqWgwwpgLU?si=qoJxA5ZMSNn9uXtd'
    },
]
const Dashboard = () => {
    return (
        <div className="home">
            <Login />
            <div className="container mt-5">
                <div className="row">
                    <div>
                        <h1 className="section-title">OUR IMPACT</h1>
                    </div>
                    <ServicesCard data={services} />
                    <MissionCard data={missions} />
                    <BlogSlide data={blogs} />
                    <ImageSlide data={galleryImages} />
                    <VideoSlide data={videos} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard