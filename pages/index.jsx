import dynamic from "next/dynamic";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import Resume from "../src/components/Resume";
import Layout from "../src/layouts/Layout";
import {
  servicesSliderProps,
  testimonialsSliderProps,
} from "../src/sliderProps";
const PortfolioIsotope = dynamic(
  () => import("../src/components/PortfolioIsotope"),
  {
    ssr: false,
  }
);
const Index = () => {
  return (
    <Layout pageClassName={"home"}>
      {/* Section - Hero Started */}
      <section
        className="lui-section lui-section-hero lui-gradient-top"
        id="started-section"
      >
        <div className="container">
          {/* Hero Started */}
          <div className="lui-started v-line v-line-left">
            <div className="section hero-started">
              <div
                className="content scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="titles">
                  <div className="lui-subtitle">
                    <span>
                      {" "}
                      Hello, <b>my name is</b>
                    </span>
                  </div>
                  <h1
                    className="title splitting-text-anim-1 scroll-animate"
                    data-splitting="chars"
                    data-animate="active"
                  >
                    <span>
                      <b>Rayhan</b> {" "}
                    </span>
                  </h1>
                  <div className="label lui-subtitle">
                    {" "}
                    I am a <strong>Freelance Graphic Designer, UI/UX designer, Motion Graphic Designer, and Software Developer.</strong>
                  </div>
                </div>
                <div className="description">
                  <div>
                    <p>
                    I am an experienced freelance graphic designer from Malang, Indonesia. 
                    I offer a wide range of creative and professional design services, 
                    including web design (WordPress), UI/UX, motion graphics and software development. 
                    I am ready to help you create attractive websites, intuitive apps, informative animations, 
                    and more. Contact me to bring your creative ideas to life!
                    </p>
                  </div>
                  <div className="social-links">
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-twitter" />
                    </a>
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-instagram" />
                    </a>
                    <a target="_blank" rel="nofollow" href="#">
                      <i aria-hidden="true" className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
                <div className="bts">
                  <a
                    target="_blank"
                    href="/Resume.pdf"
                    className="btn"
                  >
                    <span>Download CV</span>
                  </a>
                  <a href="#skills-section" className="btn-lnk">
                    {" "}
                    My Skills{" "}
                  </a>
                </div>
              </div>
              <div
                className="slide scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <img
                  decoding="async"
                  src="assets/images/Profil/rayhanrwa.svg"
                  alt="<b>Zoé</b> Miller"
                />
                <span className="circle circle-1" />
                <span
                  className="circle img-1"
                  style={{
                    backgroundImage: "url(assets/images/pat-1.png)",
                  }}
                />
                <span
                  className="circle img-2"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <span
                  className="circle img-3"
                  style={{
                    backgroundImage: "url(assets/images/pat-2.png)",
                  }}
                />
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="num">
                        3 <strong>+</strong>
                      </span>
                      <span className="value">
                        Years of <strong>Experience</strong>
                      </span>
                    </li>
                    <li>
                      <span className="num">43</span>
                      <span className="value">
                        Completed <strong>Projects</strong>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Web Developer </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Services */}
      <section
        className="lui-section lui-gradient-bottom"
        id="services"
      >
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> What I Do </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Services</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Services */}
        <div className="v-line v-line-right">
          <div className="container">
            <Swiper
              {...servicesSliderProps}
              className="swiper-container js-services scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Web Development </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Web Design &amp; Development  </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      A web designer from Malang, Indonesia, I offer attractive and professional website development services (including WordPress), complete with a unique logo, as well as web component development using frameworks and realtime databases. Contact me for a free consultation!{" "}
                    </div>
                  </div>
                  <div
                    className="image"
                 
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Apps Development </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> iOS &amp; Android </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                      Learning & deepening modern & mobile-ready mobile app design to reach all your target market. Although I haven't opened a mobile app design service yet, I have a lot of enthusiasm for the popular frameworks
                      </p>
                    </div>
                  </div>
                  <div
                    className="image"
                 
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Motion Graphic Designer </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Motion Graphic Designer</span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      I am an experienced Motion Graphic Designer ready to help you tell your story with engaging 2D/3D animations, unique kinetic typography, easy-to-understand data visualizations, and professional graphic design. Contact me for a free consultation!{" "}
                    </div>
                  </div>
                  <div
                    className="image"
                 
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Graphic Designer </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> Graphic &amp; Logo Designer </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      {" "}
                      As an experienced Graphic Designer, I specialize in building strong visual identities. My expertise includes creating unique logos, eye-catching designs for websites, banners, posters, to intuitive UI/UX websites and apps. Contact me for a free consultation!{" "}
                    </div>
                  </div>
                  <div
                    className="image"
                 
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="services-item">
                  <div className="lui-subtitle">
                    <span> Photography, Videography and Editing </span>
                  </div>
                  <div className="icon" />
                  <h5 className="lui-title">
                    <span> AV Editing </span>
                  </h5>
                  <div className="lui-text">
                    <div>
                      <p>
                      I am ready to help you capture your special moments and tell your story in a unique and memorable way. I am not just another photographer and videographer. I have expertise in Photography, Videography, Editing, Creativity. Contact me for a consultation!
                      </p>
                    </div>
                  </div>
                  <div
                    className="image"
                 
                  />
                </div>
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
            <div className="lui-bgtitle">
              <span> Services </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Skills */}
      <section className="lui-section lui-gradient-center" id="skills">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Professional Skills </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span>
                  {" "}
                  my <b>Talent</b>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Skills */}
        <div className="v-line v-line-left">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span>Laravel</span>
                    </h6>
                    <div className="text" style={{paddingBottom:'55px'}}>
                      <div>
                        <p>
                        The ability of the experience I have with my current skills for PHP and its frameworks, namely, Laravel 9, 10 and 11.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "15%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        15 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Python </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                        The ability of the experience I have with my current skills for Python is because I am interested and enthusiastic about learning Artificial Intelligence and Data.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "15%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        15 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Java</span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                        I have deep expertise in Java programming, which enables me to build robust and efficient applications. understand OOP, Java FX, and JVM concepts.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "87%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        87 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> JavaScript </span>
                    </h6>
                    <div className="text" style={{paddingBottom:'55px'}}>
                      <div>
                        <p>
                       The ability of the experience I have with my current skills for Javascript and its frameworks, namely, React Js, React Native, and Next Js. </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "83%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        83 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Firebase </span>
                    </h6>
                    <div className="text" style={{paddingBottom:'25px'}}>
                      <div>
                        <p>
                        The ability of the experience I have with my current skills for Firebase Realtime database and Firestore database 
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "70%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        70 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> SQL </span>
                    </h6>
                    <div className="text" style={{paddingBottom:'25px'}}>
                      <div>
                        <p>
                        I have strong expertise in Structured Query Language (SQL), which enables me to manage and analyze data effectively. understand DDL and Oracle DBMS.  
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "70%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        70 <span>%</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4">
                <div className="skills-items">
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Adobe </span>
                    </h6>
                    <div className="text">
                      <div>
                        <p>
                        The experience skills I have with my current enthusiasm for Motion Graphic Designer. The tools I use are Adobe Premiere Pro, After Effect, Audition, Photoshop, Illustrator, Lightroom, and Adobe Animate.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "85%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        85 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Figma & Sketch </span>
                    </h6>
                    <div className="text" style={{paddingBottom:'25px'}}>
                      <div>
                        <p>
                        The experience skills I have with my current enthusiasm for Figma and Sketch for UI/UX design and the additional tool Miro for UX Experience.
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "81%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                        81 <span>%</span>
                      </span>
                    </div>
                  </div>
                  <div
                    className="skills-item scrolla-element-anim-1 scroll-animate"
                    data-animate="active"
                  >
                    <h6 className="name">
                      <span> Switching, Routing, and Wireless Essentials </span>
                    </h6>
                    <div className="text" style={{paddingBottom:'25px'}}>
                      <div>
                        <p>
                          I have successfully completed the Switching, Routing, and Wireless Essentials certification program, which covers in-depth understanding and practical skills in managing modern network infrastructure. 
                        </p>
                      </div>
                    </div>
                    <div className="dots">
                      <div className="dot" style={{ width: "85%" }}>
                        <span />
                      </div>
                    </div>
                    <div className="value">
                      <span className="num">
                     
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lui-bgtitle">
              <span> Skills </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section - Works */}
      <section className="lui-section lui-gradient-top pt-12" id="portofolio">
        {/* Heading */}
        <div className="lui-heading">
          <div className="container">
            <div className="m-titles align-center">
              <h2
                className="m-title splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
                <span> Portfolio </span>
              </h2>
              <div
                className="m-subtitle splitting-text-anim-1 scroll-animate"
                data-splitting="words"
                data-animate="active"
              >
              </div>
            </div>
          </div>
        </div>
        {/* Works */}
        <div className="v-line v-line-right">
          <div className="container">
            <PortfolioIsotope />
            <div className="lui-bgtitle">
              <span> Portfolio </span>
            </div>
          </div>
        </div>
      </section>
      {/* Section - Resume */}
      <Resume />
    </Layout>
  );
};
export default Index;
