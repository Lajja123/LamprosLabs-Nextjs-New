import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";
import homeStyle from "../../styles/home.module.scss";
import "../../styles/faq.css";
// import "../styles/FAQs.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function FAQs() {
  const [activeBox, setActiveBox] = useState("");

  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // const [viewAll, setViewAll] = useState(false);
  const faqs = [
    {
      id: 1,
      question: "What's the core vision of Lampros DAO?",
      answer:
        "At our heart, Lampros DAO seeks to bridge the mainstream with the blockchain realm. We're laser-focused on supporting projects that can seamlessly introduce blockchain technology to everyday use.",
    },
    {
      id: 2,
      question:
        " I'm new to blockchain and Web3. How can Lampros DAO assist me?",
      answer:
        " Welcome aboard! Lampros DAO offers training sessions, hackathons, bootcamps, and cohorts designed specifically to help budding developers like you delve into the nuances of web3. Our community is here to guide, assist, and mentor you throughout your journey.",
    },
    {
      id: 3,
      question: "Can I contribute to open-source projects through Lampros DAO?",
      answer:
        " Absolutely! We're ardent supporters of open source and have a plethora of projects across various blockchains. Your contributions will not only enhance these projects but also shape the future of decentralized systems.",
    },
    {
      id: 4,
      question: "What's the deal with the future Lampros DAO?",
      answer:
        "We're always thinking ahead. Our vision for the Lampros DAO (Decentralized Autonomous Organization) is to craft a space where decision-making is collaborative and transparent, aligning perfectly with the ethos of decentralization.",
    },
    {
      id: 5,
      question: " How does Lampros DAO support the well-being of its members?",
      answer:
        "We believe in the holistic development of our members. Beyond the digital realm, we provide an IRL (In Real Life) environment that focuses on both the physical and mental well-being of every individual in our community.",
    },
    {
      id: 6,
      question:
        " I have a groundbreaking idea. How can Lampros DAO support its fruition?",
      answer:
        " Brilliant! Lampros DAO is always on the lookout for novel projects. We provide essential resources to ensure that promising ideas transform into sustainable realities, fueling the growth of the blockchain community.",
    },
    {
      id: 7,
      question:
        "How does Lampros DAO contribute to the growth of the web3 ecosystem?",
      answer:
        "Our commitment to web3 is unwavering. By organizing workshops, sessions, and activities, we aim to attract and induct new talents. Moreover, by providing public goods and resources, we play a pivotal role in expanding the horizons of the web3 landscape.",
    },
    {
      id: 8,
      question: " How can I become a part of Lampros DAO?",
      answer:
        "We're always eager to welcome enthusiasts! Whether you're a seasoned developer or a curious newbie, there's a place for you at Lampros DAO. Reach out to us through our contact page or join one of our community events to get started.",
    },
  ];

  const faqSectionRef = useRef();
  // gsap animation code start - DO NOT REMOVE THIS CODE
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      // use scoped selectors
      gsap.set(".faq-title-gsap", { y: 0, opacity: 1, scale: 1 });
      // gsap.from(".second-title-gsap", { opacity: 0, x: -50, duration: 1 });
      gsap.from(".faq-title-gsap", {
        opacity: 0,
        y: 30,
        scale: 0,
        scrollTrigger: {
          trigger: ".faqs-main",
          start: "top 80%", // Change start position to trigger the animation

          toggleActions: "play none none reverse",
        },
      });

      // gsap.utils.toArray(".sc-right-item").forEach((element) => {
      gsap.set(".faqs-box", { opacity: 1, y: 0 });
      gsap.from(".faqs-box", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".faqs-main",
          start: "top 75%", // Change start position to trigger the animation

          toggleActions: "play none none reverse",
        },
      });

      gsap.set(".view-more-gsap", { opacity: 1, y: 0 });
      gsap.from(".view-more-gsap", {
        opacity: 0,
        y: -50,
        scrollTrigger: {
          trigger: ".faqs-main",
          start: "top +=420", // Change start position to trigger the animation
          end: "top +=400",
          toggleActions: "play none none reverse",
        },
      });
      // });
    }, faqSectionRef);
    // clean up function
    return () => ctx.revert();
  }, []);

  return (
    <div className="faqs-container" ref={faqSectionRef}>
      <div className="faqs-main">
        <div className="faqs-grid-boxes">
          {faqs.map((item, index) => (
            <div
              className={`faqs-box ${activeBox === index ? "active" : ""}`}
              key={item.id}
              onClick={() => {
                if (activeBox === index) {
                  setActiveBox("");
                } else {
                  setActiveBox(index);
                }
              }}
            >
              <div className="faq-details">
                <span className="faq">{item.question}</span>
                <div className="faq-answer">
                  {activeBox === index && <>{item.answer}</>}
                </div>
              </div>
              <div className="faq-more">
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Arrow 3"
                      d="M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9L1 7ZM15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM1 9L15 9V7L1 7L1 9Z"
                    />
                  </svg>
                  {/* <Image
                    src={expanded ? minus : plus}
                    className={`accordionIcon ${
                      expanded ? "expanded" : "collapsed"
                    }`}
                    alt=""
                  /> */}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
