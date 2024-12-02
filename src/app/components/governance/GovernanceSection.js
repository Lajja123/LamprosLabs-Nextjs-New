import React from "react";
import governance from "@/app/assets/images/governance.png";
import styles from "../../styles/governance.module.scss";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import VoteSection from "./VoteSection";
import profile1 from "../../../../public/governance/euphoria.webp";
import profile2 from "../../../../public/governance/chain_l.webp";
import profile3 from "../../../../public/governance/hirangi.webp";
import Link from "next/link";

function GovernanceSection() {
  return (
    <div className={styles.mainsection}>
      <div className={styles.bgimage}>
        <Image src={governance} alt="ring" className={styles.img}></Image>
      </div>
      <div className={styles.maindiv}>
        <h1 className={styles.mainheading}>GOVERNANCE</h1>
        <p className={styles.info}>
          Lampros DAO is an open community of builders and governance
          enthusiasts committed to transparency, decentralization, and
          inclusivity. Through active participation in governance and
          collaborative efforts, we strive to create a more transparent,
          inclusive, and resilient web3 landscape
        </p>

        <div className={styles.teamHeading}>Our Team Members</div>
        <div className={styles.cards}>
          <Link
            href="https://x.com/Euphoria_0077"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div className={styles.card}>
              <div className={styles.icon}>
                {/* <FaFire /> */}
                <Image src={profile1} alt="" width={40} height={40}></Image>
              </div>
              <div className={styles.sideDiv}>
                <h3 className={styles.heading2}>Euphoria</h3>
                <h4 className={styles.subheading}>
                  Check Twitter Profile <FaLongArrowAltRight />
                </h4>
              </div>
            </div>
          </Link>

          <Link
            href="https://x.com/chain_haya"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div className={styles.card}>
              <p className={styles.icon}>
                <Image src={profile2} alt="" width={40} height={40}></Image>
              </p>
              <div className={styles.sideDiv}>
                <h3 className={styles.heading2}>Chain_L</h3>
                <h4 className={styles.subheading}>
                  Check Twitter Profile <FaLongArrowAltRight />
                </h4>
              </div>
            </div>
          </Link>

          <Link
            href="https://x.com/HirangiPandya"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <div className={styles.card}>
              <p className={styles.icon}>
                <Image src={profile3} alt="" width={40} height={40}></Image>
              </p>
              <div className={styles.sideDiv}>
                <h3 className={styles.heading2}>Hirangi</h3>
                <h4 className={styles.subheading}>
                  Check Twitter Profile <FaLongArrowAltRight />
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <VoteSection />
    </div>
  );
}

export default GovernanceSection;
