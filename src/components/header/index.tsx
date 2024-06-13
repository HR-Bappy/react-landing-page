
import "./index.scss";
import { toast } from "react-toastify";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";

function Header() {
  const location = useLocation();
  const navLink = [
    {
      id: 1,
      title: 'Home',
      path: '/'
    }, {
      id: 2,
      title: 'Partners',
      path: '/partners'
    }, {
      id: 3,
      title: 'About Us',
      path: '/about-us'
    }, {
      id: 4,
      title: 'Contact',
      path: '/contact'
    },
  ]

  const isActive = (path: any) => {
    let pathname = location.pathname || ''
    if (path == pathname)
      return true
    return false
  }
  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Link className="navbar-brand mt-2 mt-lg-0" to="/">
              <img
                src='/img/bd-govt.png'
                height="40"
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {
                navLink?.map((item: any, index: number) => {
                  return (
                    <li className="nav-item" key={item.id}>
                      <Link to={item.path} className={`nav-link ${isActive(item.path) ? 'active' : ''}`}>{item.title}</Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <a
              href="#"
              className="text-reset me-3"
              style={{position:'relative'}}
            >
              <IoIosNotifications />
            </a>
            <a
              href="#"
              className="text-reset me-3"
              style={{position:'relative'}}
            >
              <CgProfile />
            </a>
          </div>
        </div>
      </nav>
{/* 
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="d-flex justify-content-between align-items-center">
              <Link to={'/'}>
                <img src='/img/bd-govt.png' alt="logo" />
                <span>সরকারি কর্মচারী বাতায়ন</span>
              </Link>
              <div className="d-flex align-items-center">
                <Link to={'/'}>
                  How to use
                </Link>
                <Link to={'/'}>
                  Your opinion
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </div>


  );
}

export default Header;
