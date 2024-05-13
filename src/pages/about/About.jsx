import React from "react";
import { FaDownload } from "react-icons/fa";
import CV from "../../assets/My-Resume.pdf";
import Info from "../../components/Info";
import Interests from "../../components/Interests";
import "./about.css";
import '../../master.css';
import Skills from "../../components/Skills";
import Resume from "../../components/Resume";
import { resume } from "../../data";
import Profile from "../../components/Profile";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>
        <div className="grid about__container">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>
            <ul className="info__list grid">
              <Info />
            </ul>
            <a href={CV} download="" className="button">
              Download Cv{" "}
              <span className="button_icon">
                <FaDownload />
              </span>
            </a>
          </div>
          <div className="about__info">
            <h3 className="section__subtitle">Interests</h3>
            <div className="interest grid">
              <Interests />
            </div>
          </div>
        </div>
      </section>
      <div className="separator"></div>
      <section className="resume">
        <h3 className="section__subtitle subtitle__center">
          My Skills & Education
        </h3>
        <Resume />
      </section>
      <div className="separator"></div>
      <section className="profiles">
        <h3 className="section__subtitle subtitle__center">My Profiles</h3>
        <div className="resume__data">
          <Swiper
            slidesPerView={1}
            spaceBetween={25}
            loop={true}
            freeMode={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="w-full "
          >
            {resume.map((val) => {
              if (val.category == "profile") {
                return (
                  <SwiperSlide key={val.id}>
                    <Profile {...val} />
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
        </div>
      </section>
    </main>
  );
};

export default About;
