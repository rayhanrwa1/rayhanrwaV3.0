import Isotope from "isotope-layout";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
const PortfolioIsotope = ({ noViewMore }) => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    isotope.current = new Isotope(".works-items", {
      itemSelector: ".works-col",
      //    layoutMode: "fitRows",
      percentPosition: true,
      masonry: {
        columnWidth: ".works-col",
      },
      animationOptions: {
        duration: 750,
        easing: "linear",
        queue: false,
      },
    });
    return () => isotope.current.destroy();
  });
  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  const activeBtn = (value) => (value === filterKey ? "active" : "");
  return (
    <Fragment>
      <div className="works-box">
        <div
          className="filter-links scrolla-element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className={`c-pointer lui-subtitle ${activeBtn("*")}`}
            onClick={handleFilterKeyChange("*")}
            data-href=".works-col"
          >
            All
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-ui-ux-design"
            )}`}
            onClick={handleFilterKeyChange("sorting-ui-ux-design")}
            data-href=".sorting-ui-ux-design"
          >
            Graphic Design
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn("sorting-photo")}`}
            onClick={handleFilterKeyChange("sorting-photo")}
            data-href=".sorting-photo"
          >
           AV Editing
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-development"
            )}`}
            onClick={handleFilterKeyChange("sorting-development")}
            data-href=".sorting-development"
          >
            Development
          </a>
          <a
            className={`c-pointer lui-subtitle ${activeBtn(
              "sorting-branding"
            )}`}
            onClick={handleFilterKeyChange("sorting-branding")}
            data-href=".sorting-branding"
          >
            
          </a>
        </div>
        <div className="works-items works-masonry-items row">
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://www.figma.com/proto/cYEvdUHbg0BtRYNL5YX66Q/Wali-Sosmed-V2?node-id=101-1904&t=yr8KuSZFdjB1Enkn-1&scaling=scale-down&page-id=101%3A1899&starting-point-node-id=101%3A1904&show-proto-sidebar=1">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/Porotolio-1.jpg"
                        alt="Zorro"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> UI/UX App </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://www.figma.com/proto/cYEvdUHbg0BtRYNL5YX66Q/Wali-Sosmed-V2?node-id=101-1904&t=yr8KuSZFdjB1Enkn-1&scaling=scale-down&page-id=101%3A1899&starting-point-node-id=101%3A1904&show-proto-sidebar=1">
                    <a>Wali Sosmed</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A user interface design, “Guardian of Social Media” focuses on the user experience to provide a guardian feature that is designed to focus on news, articles that will be useful to the user.
                  </p>
                </div>
                <Link legacyBehavior href="https://www.figma.com/proto/cYEvdUHbg0BtRYNL5YX66Q/Wali-Sosmed-V2?node-id=101-1904&t=yr8KuSZFdjB1Enkn-1&scaling=scale-down&page-id=101%3A1899&starting-point-node-id=101%3A1904&show-proto-sidebar=1">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://www.instagram.com/rayhanrwa/">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/Portofolio-2.jpg"
                        alt="Gooir"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> AV Editing </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://www.instagram.com/rayhanrwa/">
                    <a>Photography</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Some of my photography portfolios, and some of my other experiences can be found in highlights
                  </p>
                </div>
                <Link legacyBehavior href="https://www.instagram.com/rayhanrwa/">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-development ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/Portofolio-3.jpg"
                        alt="Explore"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Development </span>
                <h5 className="name">
                  <Link legacyBehavior href="">
                    <a>Codingin Aja</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  A website that I am creating and developing, creating an online coding elearning website and mentoring classes.
                  </p>
                </div>
                <Link legacyBehavior href="">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-branding sorting-ui-ux-design">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/Portofolio-4.jpg"
                        alt="Mozar"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> Graphic Designer</span>
                <h5 className="name">
                  <Link legacyBehavior href="">
                    <a>Lanyard Design</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  My portfolio as a designer and interesting design experience and using mockups to illustrate authenticity
                  </p>
                </div>
                <Link legacyBehavior href="">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://docs.google.com/document/d/13yI9LlNmScv-BI2sdBna-wmoELEEUB1PbCBcI3xKp-I/edit?usp=sharing">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/Portofolio-5.jpg"
                        alt="Stay Fit"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> AV EDITING </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://docs.google.com/document/d/13yI9LlNmScv-BI2sdBna-wmoELEEUB1PbCBcI3xKp-I/edit?usp=sharing">
                    <a>Film & Videography</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Making videography and movies with many clients, I make motion graphic video effects and other editing.
                  </p>
                </div>
                <Link legacyBehavior href="https://docs.google.com/document/d/13yI9LlNmScv-BI2sdBna-wmoELEEUB1PbCBcI3xKp-I/edit?usp=sharing">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
          <div className="works-col col-xs-12 col-sm-12 col-md-12 col-lg-12 sorting-photo ">
            <div
              className="works-item scrolla-element-anim-1 scroll-animate"
              data-animate="active"
            >
              <div className="image">
                <div className="img">
                  <Link legacyBehavior href="https://academysherpa.com/">
                    <a>
                      <img
                        decoding="async"
                        src="assets/images/Portofolio-6.png"
                        alt="Stay Fit"
                      />
                      <span className="overlay" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="desc">
                <span className="category"> DEVELOPMENT </span>
                <h5 className="name">
                  <Link legacyBehavior href="https://academysherpa.com/">
                    <a>Academy Sherpa</a>
                  </Link>
                </h5>
                <div className="text">
                  <p>
                  Created a project at the beginning of this year with sherpa academy, rebuilding the website from V1.0.4 to V.3.0.2, implementing the translation of UI/UX design into website program code. 
                  </p>
                </div>
                <Link legacyBehavior href="https://academysherpa.com/">
                  <a className="lnk">See project</a>
                </Link>
              </div>
              <div
                className="bg-img"
                style={{
                  backgroundImage: "url(assets/images/pat-2.png)",
                }}
              />
            </div>
          </div>
        </div>
        {!noViewMore && (
          <div className="load-more-link">
            {/* <Link legacyBehavior href="/works">
              <a
                className="btn scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                <span>View More</span>
              </a>
            </Link> */}
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default PortfolioIsotope;
