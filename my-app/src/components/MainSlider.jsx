import React from "react";
import Form from "../components/Form";
const MainSlider = () => {
  return (
    <>
      <div id="content" className="main-content" role="main">
        <div id="slideshow-container">
          <div id="home_slider">
            <div className="home-slides">
              <div className="home-slide">
                <img
                  src="wp-content/themes/franchise-corporate/assets/images/slide_1.webp"
                  alt="Family In Front of Home"
                  height={900}
                  width={1920}
                  type="image/jpeg"
                />
              </div>
              <div className="home-slide">
                <img
                  src="wp-content/themes/franchise-corporate/assets/images/slide_2.webp"
                  alt="Handyman Speaks With Client"
                  height={900}
                  width={1920}
                  type="image/jpeg"
                />
              </div>
              <div className="home-slide">
                <img
                  src="wp-content/themes/franchise-corporate/assets/images/slide_3.webp"
                  alt="Two Story House With Lawn"
                  height={900}
                  width={1920}
                  type="image/jpeg"
                />
              </div>
            </div>
          </div>
          <div className="home-slider-text">
            <h2 className=" text-[3vw]">
              WE MAINTAIN PEACE OF MIND ,
              <br />
              ONE HOME AT A TIME
            </h2>
            <p className="text-[3vw]">
              Complete our contact form today to schedule services.
            </p>
            <a href="contact/index.html" className="btn btn-secondary mr-0">
              Contact Us
            </a>
          </div>
        </div>
        <div className="wrap" id="text_content">
          <section className="content_2 section__wrapper custom-padding top-block">
            <div className="container">
              <div className="row ">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h1 className="text-align-left lg:text-[1.5vw] lg:font-bold">
                        HOME REPAIR SERVICES WITH HOMESTEADY
                      </h1>
                      <h2 className="text-align-left lg:text-[1vw] font-medium mt-[1vw]">
                        Trusted Handyman Services for Home Repairs and
                        Dependable Maintenance.
                      </h2>
                      <p className="text-align-left lg:text-[1vw] lg;font-medium leading-[2vw] lg:mt-[1vw]">
                        HomeSteady’s mission is to provide proactive,
                        trustworthy, and affordable home repair and maintenance
                        solutions. Our local technicians ready to assist you
                        with your household projects or repair needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section__img">
                    <div className="section_img_wrapper">
                      <img
                        width={800}
                        height={534}
                        src="wp-content/uploads/2022/08/home.jpg"
                        className="attachment-full size-full"
                        alt="Family Admires Front of Their Home"
                        decoding="async"
                        fetchpriority="high"
                        srcSet="https://www.homesteadyservices.com/wp-content/uploads/2022/08/home.jpg 800w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/home-300x200.jpg 300w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/home-768x513.jpg 768w"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_1 section__wrapper ">
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h2 className="text-align-left lg:text-[1.5vw] lg:font-bold">
                        OUR SERVICE GUARANTEE
                      </h2>
                      <p className="text-align-left lg:text-[1vw] font-medium leading-[2vw] lg:mt-[1vw]">
                        HomeSteady stands behind our technicians and the
                        services they perform by providing a one-year warranty
                        on all our home services. If our home maintenance
                        solutions fall short of your expectations, let us know
                        within one year of the service date, and we will return
                        to your home to make it right.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="feature_2 section__wrapper lg:mt-[1vw]">
            <div className="container">
              <div className="row ">
                <div className="col-md-">
                  <div className="section__container">
                    <div className="section__content "></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row justify-content-center">
                    <div className="col-md-6 mb-md-0 mb-5">
                      <div className="column">
                        <div className="column-img">
                          <img
                            src="wp-content/uploads/2022/08/RW-4-3938083b-1-558w.jpg"
                            height={373}
                            width={560}
                            alt="Fixing Window Curtain ─ Ann Arbor, MI ─ HomeSteady"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-md-0 mb-5">
                      <div className="column">
                        <div className="column-img">
                          <img
                            src="wp-content/uploads/2022/08/RW-3-6469f2f3-1-558w.jpg"
                            height={373}
                            width={560}
                            alt="Checking Electricity ─ Ann Arbor, MI ─ HomeSteady"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="top-triangle" />
          <section className="content_1 section__wrapper blue-bg triangle-above">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <div
                        id={1706102484}
                        className="dmNewParagraph"
                        data-element-type="paragraph"
                        data-version={5}
                      >
                        <h2 className="text-align-left lg:text-[1.5vw] lg:font-bold">
                          YOUR TRUSTED SOURCE FOR HOME REPAIRS NEAR YOU
                        </h2>
                      </div>
                      <div
                        id={1679930216}
                        className="dmNewParagraph md:text-[1vw] "
                        data-element-type="paragraph"
                        data-version={5}
                      >
                        80% of the nation’s 137 million homes are now at least
                        20 years old, and 40% are at least 50 years old. With
                        age comes the need for a little TLC every now and then.
                        Things can also break or start to malfunction in brand
                        new homes when you least expect it. This is where our
                        trusted technicians can step in to assist you in any
                        home repair services you may need.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_2 section__wrapper blue-bg triangle-below reverse-mobile">
            <div className="container">
              <div className="row flex-row-reverse">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content lg:mt-[1vw]">
                      <h3 className="text-align-left lg:text-[1vw]">
                        NEED HELP WITH HOME REPAIRS?
                      </h3>
                      <h3 className="text-align-left lg:text-[1vw]">
                        OUR HOME REPAIR SERVICES INCLUDE:
                      </h3>
                      <ul className="defaultList ">
                        <li>
                          <a href="painting-services/index.html" type="page">
                            Painting
                          </a>
                        </li>
                        <li>
                          <a href="bathroom-repairs/index.html" type="page">
                            Bathroom Repairs
                          </a>
                        </li>
                        <li>
                          <a href="deck-repairs/index.html" type="page">
                            Deck Services
                          </a>
                        </li>
                        <li>
                          <a href="door-services/index.html" type="page">
                            Door Services
                          </a>
                        </li>
                        <li>
                          <a href="drywall-repair/index.html" type="page">
                            Drywall Repairs
                          </a>
                        </li>
                        <li>
                          <a href="fence-repair/index.html" type="page">
                            Fence Repairs
                          </a>
                        </li>
                        <li>
                          <a href="flooring-repair/index.html" type="page">
                            Flooring Repairs
                          </a>
                        </li>
                        <li>
                          <a href="tv-mounting/index.html" type="page">
                            TV Mounting
                          </a>
                        </li>
                        <li>
                          <a href="tile-repair/index.html" type="page">
                            Tile Repairs
                          </a>
                        </li>
                      </ul>
                      <h3 className="text-align-left lg:text-[1vw] lg:mt-[1vw]">
                        BROWSE OUR COMPLETE LIST OF HOME SERVICES
                      </h3>
                      <div className="section__button text-left lg:mt-[1vw]">
                        <a
                          className="btn btn-primary"
                          href="https://irp.cdn-website.com/9922685c/files/uploaded/Service_Sheet_8.5x14_HomeSteady_Generic.pdf"
                          target="_blank"
                        >
                          HOME REPAIR SERVICES
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section__img">
                    <div className="section_img_wrapper">
                      <img
                        width={800}
                        height={534}
                        src="wp-content/uploads/2022/08/home2.jpg"
                        className="attachment-full size-full"
                        alt="Home Front View"
                        decoding="async"
                        srcSet="https://www.homesteadyservices.com/wp-content/uploads/2022/08/home2.jpg 800w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/home2-300x200.jpg 300w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/home2-768x513.jpg 768w"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="bottom-triangle" />
          <section className="content_1 section__wrapper " id="steady-hp">
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h2
                        className="m-text-align-left text-align-center lg:text-[1.5vw] "
                        style={{ textAlign: "center" }}
                      >
                        STEADY HOME MAINTENANCE PLANS
                      </h2>
                      <p>&nbsp;</p>
                      <h3 className="text-align-center lg:text-[1.5vw]">
                        WORRY-FREE HOME SERVICES
                      </h3>
                      <p className="text-align-center lg:text-[1vw] ">
                        HomeSteady’s annual membership-based maintenance plan
                        takes a proactive approach to caring for your home.
                        Entrust your routine maintenance to us and leave your
                        worries behind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_2 section__wrapper " id="home-plan">
            <div className="container">
              <div className="row ">
                <div className="col-md-6 mt-5 mt-md-0">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 className="text-align-left lg:text-[1.5vw]">
                        WHY CHOOSE THE STEADY HOME PLAN?
                      </h3>
                      <p className="text-align-left lg:text-[1vw] ">
                        The Steady Home Plan provides homeowners with a
                        dependable home maintenance solution. Steady Home Plan
                        members avoid the difficulty of finding a reliable
                        handyman to tackle home repairs as they arise. Members
                        enjoy many perks, including:
                      </p>
                      <p className="text-align-left lg:text-[1vw] lg:mt-[1vw]">
                        ›&nbsp; &nbsp; &nbsp;Dependable and Hassle-Free Home
                        Maintenance
                        <br />
                        ›&nbsp; &nbsp; &nbsp;Discount On Our Hourly Bill Rate
                        <br />
                        ›&nbsp; &nbsp; &nbsp;Priority Scheduling
                        <br />
                        ›&nbsp; &nbsp; &nbsp;Yearly Home Evaluations
                        <br />
                        ›&nbsp; &nbsp; &nbsp;Experienced, Insured, and Trusted
                        Technicians
                      </p>
                      <div
                        id={1722661606}
                        className="u_1722661606 dmNewParagraph"
                        data-element-type="paragraph"
                        data-version={5}
                        data-styletopreserve="{"
                      >
                        <h3 className="text-align-left lg:text-[1.5vw] lg:mt-[1vw]">
                          <span className="">
                            LEARN MORE ABOUT THE STEADY HOME PLAN
                          </span>
                        </h3>
                      </div>
                      <div className="section__button text-left lg:mt-[1vw]">
                        <a
                          className="btn btn-primary"
                          href="home-maintenance-plans/index.html"
                          target="_self"
                        >
                          STEADY HOME PLAN
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section__img">
                    <div className="section_img_wrapper">
                      <img
                        width={800}
                        height={533}
                        src="wp-content/uploads/2022/08/bathroom.jpg"
                        className="attachment-full size-full"
                        alt="Bathroom"
                        decoding="async"
                        srcSet="https://www.homesteadyservices.com/wp-content/uploads/2022/08/bathroom.jpg 800w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/bathroom-300x200.jpg 300w, https://www.homesteadyservices.com/wp-content/uploads/2022/08/bathroom-768x512.jpg 768w"
                        sizes="(max-width: 800px) 100vw, 800px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="content_1 section__wrapper " id="customer-review">
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 style={{ textAlign: "center" }}>Customer Review:</h3>
                      <p style={{ textAlign: "center" }}>
                        <strong>
                          “I have enrolled in the Homesteady maintenance plan.
                          Last week was my first home safety check visit from
                          Dustin. Dustin inspected everything such as
                          electrical, plumbing, furnace, etc. to ensure good
                          working order. Everything checked out good except that
                          he needed to change out my furnace filter. Dustin is
                          very trustworthy, professional and knowledgeable. I
                          feel so much safer in my home by having this service!
                        </strong>
                      </p>
                      <p style={{ textAlign: "center" }}>
                        <strong>– Therese (Terri) McBride</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            className="content_1 section__wrapper "
            id="form-header-line"
          >
            <div className="container">
              <div className="row ">
                <div className="col-md-12">
                  <div
                    role="region"
                    aria-labelledby="intro"
                    className="section__container"
                  >
                    <div className="section__content ">
                      <h3 style={{ textAlign: "center" }}>
                        CONTACT A LOCAL HANDYMAN NEAR ME
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="contact_4 section__wrapper ">
            <div className="container">
              <div className="row mb-5">
                <div className="col-12">
                  <div className="section__container">
                    <div className="section__content">
                      <h2
                        className="m-text-align-left text-align-center"
                        style={{ textAlign: "center" }}
                      >
                        SCHEDULE AN APPOINTMENT ONLINE TODAY TO DISCUSS YOUR
                        PROJECTS WITH
                        <br />
                        YOUR LOCAL HANDYMAN, HOMESTEADY.
                      </h2>
                      <h3
                        className="text-align-center"
                        style={{ textAlign: "center" }}
                      >
                        Select a Location to Contact your local HomeSteady.
                      </h3>
                      <p style={{ textAlign: "center" }}>
                        <a
                          className="m-font-size-14 font-size-18"
                          href="mi-jackson/index.html"
                          type="page"
                        >
                          Jackson, MI
                        </a>
                      </p>
                      <p style={{ textAlign: "center" }}>
                        Or Complete Our Contact Form to Connect with your Local
                        HomeSteady Technicians!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Form />
            </div>
          </section>
        </div>
        {/* .wrap */}
      </div>
    </>
  );
};

export default MainSlider;
