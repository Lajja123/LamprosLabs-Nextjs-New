"use client";
import Image from "next/image";
import ScrollBtn from "./components/scrollbarBtn";
import homeStyle from "./styles/home.module.scss";
import { useRef, useState } from "react";
import section1Img from "./assets/images/section1-img.webp";
import section2Img from "./assets/images/section2-img.webp";
import { Fade } from "react-reveal";
import arrow from "./assets/images/right-arrow.png";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import FAQ from "./components/faq/page";
import { question } from "./components/faqApi/faqApi";
import Head from "next/head";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleBeforeChange = (current, next) => {
    setActiveIndex(next);
  };

  const slickSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    dots: true,
    speed: 300,
    centerPadding: "20px",
    infinite: true,
    autoplaySpeed: 3000,
    autoplay: true,
    beforeChange: handleBeforeChange,
  };

  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="description" content="This is a description of my page" />
        <meta name="keywords" content="react, meta tags, seo" />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="My Home title" />
        <meta
          property="og:description"
          content="This is a description of my page"
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com/my-page" />
        <meta name="twitter:title" content="My Page Title" />
        <meta
          name="twitter:description"
          content="This is a description of my page"
        />
        <meta name="twitter:image" content="https://example.com/image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={homeStyle.lmplabHomepageMainBg}>
        <div className="scroll-top">
          <ScrollBtn
            section1Ref={section1Ref}
            section2Ref={section2Ref}
            section3Ref={section3Ref}
          />
          <section
            className={homeStyle.homepageSecion1Main}
            ref={section1Ref}
            smooth={true}
            duration={600}
          >
            <div className={homeStyle.section1BgImgMain}>
              <Image
                className={homeStyle.section1BgImg}
                src={section1Img}
              ></Image>
              <div className={homeStyle.section1PositionMain}>
                <Fade bottom duration={1000} distance="20px">
                  <h1 className={homeStyle.section1Heading}>The Beacon</h1>
                  <h1 className={homeStyle.section1Heading}>
                    of{" "}
                    <span className={homeStyle.colorChangeText}>
                      Blockchain{" "}
                    </span>
                  </h1>
                  <div className={homeStyle.homeSubtitle}>
                    Driving Mainstream Adoption, Empowering Developers, and
                    Cultivating the Future of Web3
                  </div>
                </Fade>
              </div>
            </div>
          </section>
          <section
            className={homeStyle.homepageSecion2Main}
            ref={section2Ref}
            smooth={true}
            duration={600}
            infinite
          >
            <Image className={homeStyle.section2Img} src={section2Img}></Image>
            <div className={homeStyle.section2Flex}>
              <div className={homeStyle.hideForMobile}>
                <Fade bottom duration={3000} distance="30px">
                  <p className={homeStyle.section2Pera}>
                    In the vibrant world of blockchain, Lampros Labs stands as a
                    beacon, illuminating the path for innovators, dreamers, and
                    builders. Founded with a profound vision to seamlessly merge
                    blockchain technology with mainstream applications, we've
                    steadily grown into a robust community hub.
                  </p>
                  <p className={homeStyle.homeMlPera}>
                    Our ethos is rooted in fostering growth – both of the
                    individual and the collective. With each project we support,
                    every developer we guide, and each event we host, we inch
                    closer to a future where blockchain isn't just a buzzword,
                    but an integral part of our digital tapestry.
                  </p>
                </Fade>
              </div>
              <div className={homeStyle.hideForWeb}>
                <Fade bottom duration={3000} distance="30px">
                  <p className={homeStyle.section2Pera1}>
                    In the vibrant world of blockchain, Lampros Labs stands as a
                    beacon, illuminating the path for innovators, dreamers, and
                    builders. Founded with a profound vision to seamlessly merge
                    blockchain technology with mainstream applications, we've
                    steadily grown into a robust community hub.
                  </p>
                  <p className={homeStyle.homeMlPera1}>
                    Our ethos is rooted in fostering growth – both of the
                    individual and the collective. With each project we support,
                    every developer we guide, and each event we host, we inch
                    closer to a future where blockchain isn't just a buzzword,
                    but an integral part of our digital tapestry.
                  </p>
                </Fade>
              </div>
              <Fade bottom duration={2000} distance="20px">
                <Link href="/about-us">
                  <button
                    id={homeStyle.button7}
                    className={homeStyle.section2Button}
                  >
                    Know more
                    <div id={homeStyle.dubArrow}>
                      <Image src={arrow} />
                    </div>
                  </button>
                </Link>
              </Fade>
            </div>
          </section>
          <section
            className={homeStyle.homepageSecion3MainTemplate}
            ref={section3Ref}
            smooth={true}
            duration={600}
          >
            <Slider {...slickSettings} className={homeStyle.slickslider}>
              <div className={activeIndex === 0 ? "slick-active" : ""}>
                <div className={homeStyle.section3Card}>
                  <h1 className={homeStyle.section3CardTitle}>
                    Hack, Build, Learn
                  </h1>

                  <p className={homeStyle.section3CardDesc}>
                    Sharpen your skills with us. From high-octane hackathons to
                    intensive bootcamps and enlightening cohorts, Lampros Labs
                    is your ticket to deepening your web3 proficiency.
                  </p>
                  <Link href="/programs/hackathon">
                    <button
                      className={homeStyle.section3CardButton}
                      id={homeStyle.button7}
                    >
                      <div id={homeStyle.dubArrow}>
                        <Image src={arrow} />
                      </div>
                      Know more
                    </button>
                  </Link>
                </div>
              </div>
              <div className={activeIndex === 1 ? "slick-active" : ""}>
                <div className={homeStyle.section3Card}>
                  <h1 className={homeStyle.section3CardTitle}>
                    From Labs to DAO
                  </h1>

                  <p className={homeStyle.section3CardDesc}>
                    The Lampros vision isn't just here and now. We're laying the
                    groundwork for a future Lampros DAO, where decentralization
                    meets purposeful action.
                  </p>
                  <Link href="/programs/hackathon">
                    <button
                      className={homeStyle.section3CardButton}
                      id={homeStyle.button7}
                    >
                      <div id={homeStyle.dubArrow}>
                        <Image src={arrow} />
                      </div>
                      Join Us
                    </button>
                  </Link>
                </div>
              </div>
              <div className={activeIndex === 3 ? "slick-active" : ""}>
                <div className={homeStyle.section3Card}>
                  <h1 className={homeStyle.section3CardTitle}>
                    Workshops, Activities & More
                  </h1>

                  <p className={homeStyle.section3CardDesc}>
                    Web3 is vast, and its potential is limitless. Through our
                    curated sessions, workshops, and activities, we aim to draw
                    in fresh talent, providing a launchpad for their web3
                    ambitions.
                  </p>
                  <Link href="/programs/hackathon">
                    <button
                      className={homeStyle.section3CardButton}
                      id={homeStyle.button7}
                    >
                      <div id={homeStyle.dubArrow}>
                        <Image src={arrow} />
                      </div>
                      Know more
                    </button>
                  </Link>
                </div>
              </div>
            </Slider>
          </section>
          <section className={homeStyle.homepageSecion4Main}>
            <Fade bottom duration={2000} distance="2px">
              <h1 className={homeStyle.sectio4Title}>FAQS</h1>
            </Fade>
            <div className={homeStyle.faqAccordionMain}>
              <Fade bottom duration={2000} distance="30px">
                {question.map((faq) => (
                  <FAQ
                    key={faq.question}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </Fade>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
