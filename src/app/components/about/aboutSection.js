"use client";
import { useRef } from "react";
import aboutImg from "../../assets/images/aboutUsImg.webp";
import vision from "../../assets/images/Vision.jpg";
import mission from "../../assets/images/Mission.jpg";
import blockchain from "../../assets/images/blockchain.png";
import blockchainImg from "../../assets/images/blockchain-img.png";
import idea from "../../assets/images/idea.png";
import technology from "../../assets/images/technology.png";
import website from "../../assets/images/website.png";
import aboutImg2 from "../../assets/images/about-img2.webp";
import journey from "../../assets/images/journey-img.png";
import journey1 from "../../assets/images/journey1.png";
import { Fade } from "react-reveal";
import aboutStyle from "../../styles/aboutUs.module.scss";
import Image from "next/image";
import ScrollBtn from "../scrollbarBtn";
import hack from "../../assets/images/hackathon.png";
import idea1 from "../../assets/images/idea1.png";
import meet from "../../assets/images/meeting.png";
import web from "../../assets/images/web.png";
import union from "../../assets/images/Union.png";

export default function aboutPage() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const items = [
    {
      date: "Oct '23",
      title: "Formation of Lampros DAO",
      // link: "#",
    },
    {
      date: "Nov '23 - Feb '24",
      title: "NumbaNERDs Program (Optimism Collective)",
      link: "https://app.dework.xyz/optimism-community/contributors",
    },
    {
      date: "Mar '24 - Apr '24",
      title: "Open Data Community (ThankARB, Arbitrum DAO)",
      link: "https://snapshot.box/#/s:opendatacommunity.eth/proposals",
    },
    {
      date: "Mar '24",
      title: "Becoming a delegate in Arbitrum DAO and Optimism Collective",
      link: "https://forum.arbitrum.foundation/t/lampros-dao-delegate-communication-thread/26642?u=euphoria",
    },
    {
      date: "Jun '24 - Dec '24",
      title: "Arbitrum Governance & Development Initiative (AGDI)",
      link: "https://forum.arbitrum.foundation/t/arbitrum-governance-and-development-initiative-lampros-labs-dao/26315?u=euphoria",
    },
    {
      date: "Jun '24 - Nov '24",
      title: "LTIPP Research Bounty (Arbitrum DAO)",
      link: "https://forum.arbitrum.foundation/t/team-lampros-labs-dao-ltipp-research-bounty-reports/27015/3?u=euphoria",
    },
    {
      date: "Jun '24 - Jan '25",
      title: "Contributing to Optimism Foundation Mission Requests",
      link: "https://github.com/ethereum-optimism/ecosystem-contributions/issues/183#issuecomment-2385745249",
    },
    {
      date: "Dec '24",
      title:
        "Ranked in Top 5 Active Delegate in Arbitrum DAO (Delegate Incentive Program)",
      link: "https://arbitrum.karmahq.xyz/delegate-compensation?month=december&year=2024",
    },
  ];

  return (
    <div>
      <ScrollBtn
        section1Ref={section1Ref}
        section2Ref={section2Ref}
        section3Ref={section3Ref}
      />
      <div className={aboutStyle.aboutUsMainBg}>
        <div className={aboutStyle.aboutUsMain} smooth={true} duration={600}>
          <section className={`${aboutStyle.section1AboutUs} py-sm-5 py-3`}>
            <div className={aboutStyle.aboutImgMainDiv}>
              <Image src={aboutImg} alt="" className={aboutStyle.aboutImg} />
            </div>

            <div
              className={`${aboutStyle["aboutUsSection1Card"]} px-sm-5 px-3`}
            >
              <div className={`${aboutStyle["aboutUsTitle"]} pb-3`}>
                About Us
              </div>

              <Fade duration={1200} delay={100}>
                <div className={aboutStyle.aboutSec1Box}>
                  <p className={aboutStyle.aboutUsSection1CardDesc}>
                    Lampros DAO was founded by a group of individuals with a
                    shared vision for governance and decentralization. Our north
                    star is to support and grow Ethereum, and we contribute to
                    this goal by actively participating in Layer 2 solutions
                    like Arbitrum and Optimism.
                  </p>
                  <p className={aboutStyle.aboutUsSection1CardDesc}>
                    We believe blockchain is not just about technology—it’s
                    about the people, communities, and ideas that drive it
                    forward. Our ethos is rooted in fostering growth, both for
                    individuals and the ecosystem, ensuring that governance,
                    research, and education remain accessible to all. Through
                    proposal discussions, governance research, and
                    ecosystem-building, we help shape the future of
                    decentralized networks.
                  </p>
                  <p className={aboutStyle.aboutUsSection1CardDesc}>
                    At Lampros DAO, we are supporting a movement—a movement
                    where public goods, developer support, and open
                    collaboration take centre stage. We envision a future where
                    blockchain technology seamlessly integrates into everyday
                    life, making Web3 more inclusive, sustainable, and
                    impactful.
                  </p>
                  <p className={aboutStyle.aboutUsSection1CardDesc}>
                    We are building on this foundation—join us as we shape the
                    future of decentralized governance and Ethereum’s Layer 2
                    ecosystems.
                  </p>
                </div>
              </Fade>
            </div>
          </section>

          <section ref={section1Ref} className={aboutStyle.section2AboutUs}>
            <div
              className={`${aboutStyle["aboutsecflexmain"]} justify-content-around py-lg-2 pb-lg-5`}
            >
              <div className="aboutsec-flex col-lg-5 col-10">
                <Fade bottom duration={1000} distance="50px">
                  <div className={aboutStyle.aboutsecVisionDiv}>
                    <div className={aboutStyle.aboutsecVision}>Vision</div>
                  </div>
                  <div className={aboutStyle.aboutsecPeraBox}>
                    <div className={aboutStyle.sec2AboutPeraVision}>
                      To be the global nexus where blockchain technology
                      seamlessly integrates into everyday life, creating a
                      decentralized and empowered future for all.
                    </div>
                  </div>
                </Fade>
              </div>
              <Fade bottom duration={1000} distance="50px">
                <div
                  className={`${aboutStyle["visionimg"]} col-5 d-none d-lg-block`}
                >
                  <Image src={vision} alt=""></Image>
                </div>
              </Fade>
            </div>

            <div
              className={`${aboutStyle["aboutsecflexmain"]} justify-content-around py-lg-2`}
            >
              <Fade bottom duration={1000} distance="50px">
                <div
                  className={`${aboutStyle["visionimg"]} col-5 d-none d-lg-block`}
                >
                  <Image src={mission} alt=""></Image>
                </div>
              </Fade>

              <div className="aboutsec-flex col-lg-5 col-10">
                <Fade bottom duration={1000} distance="50px">
                  <div className={aboutStyle.aboutsecVisionDiv}>
                    <div className={aboutStyle.aboutsecMission}>Mission</div>
                  </div>
                  <div className={aboutStyle.aboutsecPeraBox}>
                    <div className={aboutStyle.sec2AboutPeraMission}>
                      Lampros DAO is dedicated to cultivating trailblazing web3
                      leaders, amplifying open-source breakthroughs across
                      multiple blockchain terrains, and building a community
                      bound by shared growth and decentralized principles.
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </section>

          <section
            className={`${aboutStyle["section3AboutUs"]} pb-5 d-none d-lg-block`}
            ref={section2Ref}
            smooth={true}
            duration={600}
          >
            <div className={aboutStyle.aboutsec3flex1}>
              <div className={aboutStyle.sec3AboutImg1div}>
                <Image
                  className={aboutStyle.sec3AboutImg1}
                  src={blockchain}
                  alt=""
                ></Image>
              </div>

              <div className={aboutStyle.sec3Aboutblockflex}>
                <p className={aboutStyle.sec3Aboutheading}>
                  Strengthening Decentralized Governance
                </p>
                <p className={aboutStyle.sec3Aboutpera}>
                  We are committed to strengthening decentralized governance by
                  actively participating in Layer 2 ecosystems like Arbitrum and
                  Optimism. Our goal is to make blockchain governance more
                  transparent, inclusive and research-driven.
                </p>
              </div>
            </div>

            <div className={`${aboutStyle["aboutimgflex"]} py-2`}>
              <div className={`${aboutStyle["aboutsec3hero"]} col-6`}>
                <Image
                  src={aboutImg2}
                  className={aboutStyle.aboutImg2}
                  alt=""
                ></Image>

                <div className={aboutStyle.sec3Imgheading}>Our Ethos</div>
              </div>
              <div className="py-3">
                <div className={`${aboutStyle["aboutsec3flex2"]} py-2`}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={idea}
                      alt=""
                    ></Image>
                  </div>

                  <div className={aboutStyle.sec3Aboutblockflex}>
                    <div className={aboutStyle.sec3Aboutheading}>
                      Opportunities Await
                    </div>
                    <p className={aboutStyle.sec3Aboutpera}>
                      We constantly explore new opportunities in decentralized
                      governance, contributing research, policy frameworks, and
                      insights that drive informed decision-making across DAOs.
                    </p>
                  </div>
                </div>

                <div className={`${aboutStyle["aboutsec3flex3"]} py-5`}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={blockchainImg}
                      alt=""
                    ></Image>
                  </div>
                  <div className={aboutStyle.sec3Aboutblockflex}>
                    <div className={aboutStyle.sec3Aboutheading}>
                      Public Goods for a Shared Future
                    </div>
                    <p className={aboutStyle.sec3Aboutpera}>
                      We are committed to advancing Ethereum’s vision by
                      supporting public goods, open-source development, and
                      governance initiatives across Layer 2 solutions.
                    </p>
                  </div>
                </div>

                <div className={`${aboutStyle["aboutsec3flex4"]} py-3`}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={technology}
                      alt=""
                    ></Image>
                  </div>
                  <div className={aboutStyle.sec3Aboutblockflex}>
                    <div className={aboutStyle.sec3Aboutheading}>
                      Sustainability Meets Innovation
                    </div>
                    <p className={aboutStyle.sec3Aboutpera}>
                      For blockchain networks to be sustainable, governance must
                      evolve. We conduct research and develop frameworks that
                      ensure decentralized communities remain resilient and
                      future-proof.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={aboutStyle.aboutsec3flex1}>
              <div className={aboutStyle.sec3AboutImg1div}>
                <Image
                  className={aboutStyle.sec3AboutImg1}
                  src={website}
                  alt=""
                ></Image>
              </div>
              <div className={aboutStyle.sec3Aboutblockflex}>
                <div className={aboutStyle.sec3Aboutheading}>
                  Your Web3 Journey, Amplified
                </div>
                <p className={aboutStyle.sec3Aboutpera}>
                  Web3 can be uncharted territory for many. That’s why we
                  empower developers, governance contributors, and researchers
                  with the knowledge and resources they need to shape the future
                  of decentralized networks.
                </p>
              </div>
            </div>
          </section>

          <section
            className="section3-aboutUs pb-5 d-lg-none"
            ref={section3Ref}
            smooth={true}
            duration={600}
          >
            <Fade bottom duration={2000} distance="20px">
              <div className={aboutStyle.sec3Imgheading}>Our Ethos</div>
            </Fade>

            <div style={{ position: "relative" }}>
              <Image
                src={aboutImg2}
                className={aboutStyle.aboutImg2}
                alt=""
              ></Image>
            </div>
            <div className="py-5">
              <div className={aboutStyle.aboutsec3flex1Res}>
                <div className={aboutStyle.sec3Aboutblockflex}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={blockchain}
                      alt=""
                    ></Image>
                  </div>

                  <div className="px-4">
                    <div className={aboutStyle.sec3Aboutheading}>
                      Strengthening Decentralized Governance
                    </div>
                    <div className={aboutStyle.sec3Aboutpera}>
                      We are committed to strengthening decentralized governance
                      by actively participating in Layer 2 ecosystems like
                      Arbitrum and Optimism. Our goal is to make blockchain
                      governance more transparent, inclusive and
                      research-driven.
                    </div>
                  </div>
                </div>
              </div>

              <div className={aboutStyle.aboutsec3flex1Res}>
                <div className={aboutStyle.sec3Aboutblockflex}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={idea}
                      alt=""
                    ></Image>
                  </div>

                  <div className="px-4">
                    <div className={aboutStyle.sec3Aboutheading}>
                      Opportunities Await
                    </div>
                    <div className={aboutStyle.sec3Aboutpera}>
                      We constantly explore new opportunities in decentralized
                      governance, contributing research, policy frameworks, and
                      insights that drive informed decision-making across DAOs.
                    </div>
                  </div>
                </div>
              </div>

              <div className={aboutStyle.aboutsec3flex1Res}>
                <div className={aboutStyle.sec3Aboutblockflex}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={blockchainImg}
                      alt=""
                    ></Image>
                  </div>

                  <div className="px-4">
                    <div className={aboutStyle.sec3Aboutheading}>
                      Public Goods for a Shared Future
                    </div>
                    <div className={aboutStyle.sec3Aboutpera}>
                      We are committed to advancing Ethereum’s vision by
                      supporting public goods, open-source development, and
                      governance initiatives across Layer 2 solutions.
                    </div>
                  </div>
                </div>
              </div>

              <div className={aboutStyle.aboutsec3flex1Res}>
                <div className={aboutStyle.sec3Aboutblockflex}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={technology}
                      alt=""
                    ></Image>
                  </div>

                  <div className="px-4">
                    <div className={aboutStyle.sec3Aboutheading}>
                      Sustainability Meets Innovation
                    </div>
                    <div className={aboutStyle.sec3Aboutpera}>
                      For blockchain networks to be sustainable, governance must
                      evolve. We conduct research and develop frameworks that
                      ensure decentralized communities remain resilient and
                      future-proof.
                    </div>
                  </div>
                </div>
              </div>
              <div className={aboutStyle.aboutsec3flex1Res}>
                <div className={aboutStyle.sec3Aboutblockflex}>
                  <div className={aboutStyle.sec3AboutImg1div}>
                    <Image
                      className={aboutStyle.sec3AboutImg1}
                      src={website}
                      alt=""
                    ></Image>
                  </div>

                  <div className="px-4">
                    <div className={aboutStyle.sec3Aboutheading}>
                      Your Web3 Journey, Amplified
                    </div>
                    <div className={aboutStyle.sec3Aboutpera}>
                      Web3 can be uncharted territory for many. That’s why we
                      empower developers, governance contributors, and
                      researchers with the knowledge and resources they need to
                      shape the future of decentralized networks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <section
            className={`${aboutStyle["section4aboutUs"]} pb-sm-5`}
            ref={section3Ref}
            smooth={true}
            duration={600}
          >
            <Fade bottom duration={2000} distance="20px">
              <h1 className={`${aboutStyle["sec4aboutheading"]} pb-4`}>
                Our Web3 Journey
              </h1>
            </Fade>

            <div className="d-flex d-lg-inline">
              <div className="d-none d-lg-inline">
                <Image
                  className={`${aboutStyle["union"]} hackathon`}
                  src={journey}
                  alt=""
                ></Image>
              </div>

              <div
                className={`${aboutStyle["journeyimagediv"]} col-2 d-lg-none`}
              >
                <Image
                  className={`${aboutStyle["union1"]} hackathon`}
                  src={journey1}
                  alt=""
                ></Image>
              </div>

              <div className={aboutStyle.aboutsec4mainboxflex}>
                <Fade duration={2000} delay={500}>
                  <div className={aboutStyle.aboutboxsec4}>
                    <div className={aboutStyle.aboutsec4boxheading}>
                      Hackathon Highlights
                    </div>
                    <div className={aboutStyle.aboutsec4boxpera}>
                      Lampros DAO stands tall in global hackathons, leaving
                      imprints across diverse blockchains.
                    </div>
                  </div>
                </Fade>
                <Fade duration={2000} delay={600}>
                  <div className={aboutStyle.aboutboxsec4}>
                    <div className={aboutStyle.aboutsec4boxheading}>
                      Journey from Web2 to Web3
                    </div>
                    <div className={aboutStyle.aboutsec4boxpera}>
                      We've guided 30+ developers through the transformation,
                      turning passion into web3 expertise.
                    </div>
                  </div>
                </Fade>
                <Fade duration={2000} delay={800}>
                  <div className={aboutStyle.aboutboxsec4}>
                    <div className={aboutStyle.aboutsec4boxheading}>
                      Opportunities at Lampros
                    </div>
                    <div className={aboutStyle.aboutsec4boxpera}>
                      For the new and the curious, Lampros is a beacon. Learn
                      and earn in the world of web3.
                    </div>
                  </div>
                </Fade>
                <Fade duration={2000} delay={900}>
                  <div className={aboutStyle.aboutboxsec4}>
                    <div className={aboutStyle.aboutsec4boxheading}>
                      Global Workshops
                    </div>
                    <div className={aboutStyle.aboutsec4boxpera}>
                      Broaden your horizons. Our sessions offer both global
                      exposure and skill refinement.
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </section> */}

          <section className={aboutStyle.timelineContainer}>
            <Fade bottom duration={1000} distance="20px">
              <h1
                className={`${aboutStyle.sec4aboutheading} headingAboutTimeline`}
              >
                Our Web3 Journey
              </h1>
            </Fade>

            <div className={aboutStyle.timelineWrapper}>
              <div className={aboutStyle.timeLine}></div>
              <div className={aboutStyle.timelineContent}>
                {items.map((item, index) => (
                  <Fade
                    key={index}
                    duration={900}
                    delay={500 + index * 100}
                    className={aboutStyle.fadeClass}
                  >
                      <div className={aboutStyle.timelineItem} onClick={() => item.link && window.open(item.link, "_blank", "noopener,noreferrer")}
                        style={{ cursor: item.link ? "pointer" : "default" }}>
                        <div className={aboutStyle.heading}>{item.date}</div>
                        <div className={aboutStyle.description}>
                          {item.title}
                        </div>
                        <div className={aboutStyle.connector}></div>
                        <div className={aboutStyle.dot}></div>
                      </div>
                  </Fade>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
