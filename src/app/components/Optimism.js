"use client";
import React from "react";
import { useState } from "react";
import "../styles/optimism.css";
import { ExternalLink } from "lucide-react";
import aboutImg from "../../../public/governance/173.svg";
import Image from "next/image";
import aboutStyle from "../styles/aboutUs.module.scss";
import homeStyle from "../styles/home.module.scss";
import Link from "next/link";
import arrow from "../assets/images/right-arrow.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Optimism = () => {
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
    
  return (
    <div className="optimismMainBg">
      <div className={aboutStyle.aboutImgMainDiv}>
        <Image src={aboutImg} alt="" className={aboutStyle.aboutImg} />
      </div>
      <div className="optimism-container">
        <div className="content-wrapper">
          <div className="opMain">
            <div className="opContainer">
              <Image
                src="governance/optimism.svg"
                alt=""
                width={30}
                height={30}
                className="optimismImg"
              />
              <h1 className="textop mainheading">optimism</h1>
              <Image
                src="governance/optimism.svg"
                alt=""
                width={30}
                height={30}
                className="optimismImg"
              />
            </div>

            <div>
              <h1 className="main-heading">
                Strengthening Governance & Research in Optimism Collective
              </h1>

              <p className="info">
                As an active participant in Optimism governance, Lampros DAO
                contributes to research-driven decision-making, governance
                transparency, and policy improvements. Our work spans governance
                analytics, power distribution studies, and framework development
                to support Optimism’s long-term decentralization. By analyzing
                delegate activity, power concentration, and voting structures,
                we help build a more inclusive and transparent governance
                system.
              </p>
            </div>
          </div>

          <p className="pointer-text">
            👉 Here’s a look at our key contributions to Optimism DAO
          </p>

          <div className="contributions-grid">
            <div className="contribution-card">
              <div className="card-number">1️⃣</div>
              <h3>Optimism NumbaNERDs</h3>
              <p>
              Our team actively contributed to governance-related research bounties, topping the leaderboard in the NumbaNERDs bounty program. This initiative focused on governance analytics and transparency in the Optimism ecosystem.
              </p>
              <a
                href="https://app.dework.xyz/optimism-community/contributors"
                className="action-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Contributions
                <ExternalLink className="link-icon" />
              </a>
            </div>

            <div className="contribution-card">
              <div className="card-number">2️⃣</div>
              <h3>Measuring the Concentration of Power in Optimism Collective</h3>
              <p>
              We introduced the Concentration of Power Index (CPI) to analyze governance influence in Optimism DAO. Our research compares Optimism’s decentralization with other DAOs, providing insights for future governance improvements.
              </p>
              <a
                href="https://www.papermark.io/view/cm1isoexg0003j5b1j53u50ow"
                className="action-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the report
                <ExternalLink className="link-icon" />
              </a>
            </div>

            <div className="contribution-card">
              <div className="card-number">3️⃣</div>
              <h3>Badgeholder Onchain Analysis</h3>
              <p>
              A deep dive into the onchain activity of Optimism’s Badgeholders, comparing their engagement with non-Badgeholders. This research supports informed decisions on future citizenship expansion in the Optimism Collective.
              </p>
              <a
                href="https://rose-characteristic-frog-540.mypinata.cloud/ipfs/QmNbEUZBiVz57j1vV57BWPobYQ6uhaFeu23rgzdUdY54GK"
                className="action-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the analysis
                <ExternalLink className="link-icon" />
              </a>
            </div>

            <div className="contribution-card">
              <div className="card-number">4️⃣</div>
              <h3>Votable Supply Framework</h3>
              <p>
              Developing a framework to forecast and optimize votable supply in Optimism governance. This research aims to ensure progressive decentralization and mitigate governance attack risks through data-driven projections.

              </p>
              <a
                className="action-button ongoing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ongoing Project
                <ExternalLink className="link-icon" />
              </a>
            </div>
          </div>

          {/* <section
            className={`${homeStyle.homepageSecion3MainTemplate} custom-class`}
            // ref={section3Ref}
            smooth={true}
            duration={600}
          >
            <Slider {...slickSettings} className={homeStyle.slickslider}>
              <div className={activeIndex === 0 ? "slick-active" : ""}>
                <div className={homeStyle.section3Card}>
                  <h1 className={`${homeStyle.section3CardTitle} customTitle`}>
                  1️⃣ Optimism NumbaNERDs
                  </h1>

                  <p className={homeStyle.section3CardDesc}>
                  Our team actively contributed to governance-related research bounties, topping the leaderboard in the NumbaNERDs bounty program. This initiative focused on governance analytics and transparency in the Optimism ecosystem.
                  </p>
                  <Link href="https://app.dework.xyz/optimism-community/contributors" target="_blank" rel="noopener noreferrer">
                    <button
                      className={`${homeStyle.section3CardButton} customBtn`}
                      id={homeStyle.button7}
                    >
                      <div id={homeStyle.dubArrow}>
                        <Image src={arrow} />
                      </div>
                      View Contributions
                    </button>
                  </Link>
                </div>
              </div>
              <div className={activeIndex === 1 ? "slick-active" : ""}>
                <div className={homeStyle.section3Card}>
                  <h1 className={`${homeStyle.section3CardTitle} customTitle`}>
                  2️⃣ Measuring the Concentration of Power in Optimism Collective
                  </h1>

                  <p className={homeStyle.section3CardDesc}>
                  We introduced the Concentration of Power Index (CPI) to analyze governance influence in Optimism DAO. Our research compares Optimism’s decentralization with other DAOs, providing insights for future governance improvements.

                  </p>
                  <Link href="https://www.papermark.io/view/cm1isoexg0003j5b1j53u50ow" target="_blank" rel="noopener noreferrer">
                    <button
                      className={`${homeStyle.section3CardButton} customBtn`}
                      id={homeStyle.button7}
                    >
                      <div id={homeStyle.dubArrow}>
                        <Image src={arrow} alt="" />
                      </div>
                      Read the report
                    </button>
                  </Link>
                </div>
              </div>
              <div className={activeIndex === 2 ? "slick-active" : ""}>
                <div className={homeStyle.section3Card}>
                  <h1 className={`${homeStyle.section3CardTitle} customTitle`}>
                  3️⃣ Badgeholder Onchain Analysis
                  </h1>

                  <p className={homeStyle.section3CardDesc}>
                  A deep dive into the onchain activity of Optimism’s Badgeholders, comparing their engagement with non-Badgeholders. This research supports informed decisions on future citizenship expansion in the Optimism Collective.
                  </p>
                  <Link href="https://rose-characteristic-frog-540.mypinata.cloud/ipfs/QmNbEUZBiVz57j1vV57BWPobYQ6uhaFeu23rgzdUdY54GK" target="_blank" rel="noopener noreferrer">
                    <button
                      className={`${homeStyle.section3CardButton} customBtn`}
                      id={homeStyle.button7}
                    >
                      <div id={homeStyle.dubArrow}>
                        <Image src={arrow} alt="" />
                      </div>
                      Read the analysis
                    </button>
                  </Link>
                </div>
              </div>
              <div className={activeIndex === 3 ? "slick-active" : ""}>
                <div className={homeStyle.section3Card}>
                  <h1 className={`${homeStyle.section3CardTitle} customTitle`}>
                  4️⃣ Votable Supply Framework
                  </h1>

                  <p className={homeStyle.section3CardDesc}>
                  Developing a framework to forecast and optimize votable supply in Optimism governance. This research aims to ensure progressive decentralization and mitigate governance attack risks through data-driven projections.
                  </p>
                  <Link href="/" target="_blank" rel="noopener noreferrer">
                    <button
                      className={`${homeStyle.section3CardButton} customBtn customLast`}
                      id={homeStyle.button7}
                      disabled
                    >
                      <div id={homeStyle.dubArrow}>
                        <Image src={arrow} alt="" />
                      </div>
                      Ongoing Project
                    </button>
                  </Link>
                </div>
              </div>
            </Slider>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default Optimism;
