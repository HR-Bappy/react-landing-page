import { useState } from "react";
import Header from "../components/header";
import SideBar from "../components/sidebar";
import Login from "../pages/login";
import "./index.scss";
import PageRoutes from "../pages";
import Footer from "../components/footer";

function BaseTemplate() {
  const handleClick = () => {
    const wrapper: any = document.querySelector('#wrapper');

    wrapper.classList.toggle('toggled');

  }

  return (
    <section className="app">
      <div>
        <Header />
        <div className="main-content">
          <PageRoutes />
        </div>
        <Footer />
      </div>

    </section>
  );
}
export default BaseTemplate;
