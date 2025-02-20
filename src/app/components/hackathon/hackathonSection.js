"use client";
import sec1bg from "../../assets/images/hackimg.webp";
import arrow from "../../assets/images/right-arrow.png";
import { useRef } from "react";
import { Fade } from "react-reveal";
import Image from "next/image";
import hackStyle from "../../styles/hackathon.module.scss";
import ScrollBtn from "@/app/components/scrollbarBtn";

function hackathonSection() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const currentYear = new Date().getFullYear() + 1;
  return (
    <div>
      <div className={hackStyle.inherimainbg}>
        <ScrollBtn
          section1Ref={section1Ref}
          section2Ref={section2Ref}
          section3Ref={section3Ref}
        />
        <div
          className={hackStyle.hacksection1}
          ref={section1Ref}
          smooth={true}
          duration={600}
        >
          <div className={`${hackStyle["hacksec1bg"]}  col-8`}>
            <Image src={sec1bg} alt=""></Image>
          </div>

          <Fade duration={1200} delay={100}>
            <div className={`${hackStyle["sec1box"]} col-xl-9 col-8 col-sm-9`}>
              <div className={hackStyle.sec1boxtitle}>
                Unleash Your Blockchain Potential
              </div>
              <div className={hackStyle.sec1boxpera}>
                Dive into the realm of blockchain innovation with Lampros DAO's
                exclusive hackathons! These events are meticulously crafted to
                offer participants a platform to ideate, innovate, and showcase
                their groundbreaking solutions. Whether you're a seasoned
                developer or a Web3 newbie, our hackathons are the perfect stage
                to challenge yourself and push boundaries.
              </div>
            </div>
          </Fade>
          <div
            className={`${hackStyle["sec1boxmlflex"]} col-xl-9 col-10 col-sm-9`}
          >
            <div className={`${hackStyle["sec1boxtitle"]} d-sm-none`}>
              Unleash Your Blockchain Potential
            </div>
            <div
              className={`${hackStyle["sec1boxml"]} ${hackStyle["sec1boxpera"]}`}
            >
              Dive into the realm of blockchain innovation with Lampros DAO's
              exclusive hackathons! These events are meticulously crafted to
              offer participants a platform to ideate, innovate, and showcase
              their groundbreaking solutions. Whether you're a seasoned
              developer or a Web3 newbie, our hackathons are the perfect stage
              to challenge yourself and push boundaries.
            </div>
          </div>
        </div>

        <div
          className={hackStyle.hacksection2}
          ref={section2Ref}
          smooth={true}
          duration={600}
        >
          <div>
            <Fade bottom duration={1000} distance="50px">
              <div className={hackStyle.sec2heading}>Why Join?</div>
            </Fade>
          </div>

          <div class="col-11  mx-auto">
            <div class="row align-items-stretch">
              <div class="col-md-6 col-lg-3  my-2">
                <Fade duration={1000} delay={500}>
                  <div className={hackStyle.sec2box}>
                    <div className={hackStyle.sec2boxTitle}>Networking</div>
                    <div className={hackStyle.sec2boxpera}>
                      Engage with a vibrant community of blockchain enthusiasts,
                      industry veterans, and budding innovators.
                    </div>
                  </div>
                </Fade>
              </div>
              <div class="col-md-6 col-lg-3 my-2">
                <Fade duration={1000} delay={700}>
                  <div className={hackStyle.sec2box}>
                    <div className={hackStyle.sec2boxTitle}>Learn</div>
                    <div className={hackStyle.sec2boxpera}>
                      Benefit from expert-led sessions, workshops, and hands-on
                      coding challenges.
                    </div>
                  </div>
                </Fade>
              </div>
              <div class="col-md-6 col-lg-3 my-2">
                <Fade duration={1000} delay={900}>
                  <div className={hackStyle.sec2box}>
                    <div className={hackStyle.sec2boxTitle}>Innovate</div>
                    <div className={hackStyle.sec2boxpera}>
                      Bring your groundbreaking ideas to life and contribute to
                      real-world blockchain solutions.
                    </div>
                  </div>
                </Fade>
              </div>

              <div class="col-md-6 col-lg-3 my-2">
                <Fade duration={1000} delay={1200}>
                  <div className={hackStyle.sec2box}>
                    <div className={hackStyle.sec2boxTitle}>Rewards</div>
                    <div className={hackStyle.sec2boxpera}>
                      Win exciting prizes, gain recognition, and potentially
                      land collaborations or partnerships!
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <div
          className={hackStyle.hacksection3}
          ref={section3Ref}
          smooth={true}
          duration={600}
        >
          <div>
            <Fade bottom duration={1000} distance="5px">
              <div className={hackStyle.sec3heading}>Upcoming Hackathons</div>
            </Fade>
          </div>

          <div className={hackStyle.sec3Hackmain}>
            <div className={`${hackStyle["sec3box1"]} col-10`}>
              <div className={hackStyle.sec3boxheading}>
                Lampros Web3 Vision {currentYear}
              </div>
            </div>
            <div className={`${hackStyle["sec3box2"]} col-10`}>
              <div className={hackStyle.sec3hackflex}>
                <div className={hackStyle.sec3flex1}>
                  <div className={`${hackStyle["s3date"]} col-3`}>Date:</div>
                  <input type="text" id="username" name="username" />
                </div>
                <div className={hackStyle.sec3flex1}>
                  <div className={`${hackStyle["s3date"]} col-3`}>Theme:</div>
                  <input type="text" id="username" name="username" />
                </div>
                <div>
                  <button id={hackStyle.button7} className={hackStyle.sec3btn}>
                    <div id={hackStyle.dubArrowRegister}>
                      <Image src={arrow} alt="" />
                    </div>
                    Register Now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`${hackStyle["hacksection4"]} col-9  mx-auto`}
          style={{ padding: "50px 0px" }}
        >
          <div className={hackStyle.s4heading}>Hackathon Resources</div>

          <div className="sec4-hack-res">
            <div className={hackStyle.sec4flex1}>
              <div className={`${hackStyle["s4Res"]} col-4`}>Workshops</div>

              <div className={`${hackStyle["s4pera"]} col-6`}>
                Pre-hackathon webinars and tutorials to gear up your skills.
              </div>
            </div>
            <div className={hackStyle.sec4flex1}>
              <div className={`${hackStyle["s4Res"]} col-4`}>Mentorship</div>

              <div className={`${hackStyle["s4pera"]} col-6`}>
                On-hand expert guidance throughout the event.
              </div>
            </div>
            <div className={hackStyle.sec4flex1}>
              <div className={`${hackStyle["s4Res"]} col-4`}>Toolkits</div>

              <div className={`${hackStyle["s4pera"]} col-6`}>
                Access to premium tools, APIs, and datasets to aid your
                development process.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hackathonSection;
