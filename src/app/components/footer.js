"use client";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useRef } from "react";
import Image from "next/image";
// import logo from "../assets/images/logo.png";
import logo from "../../../public/mainLogo.png";
import discord from "../assets/images/discord.png";
import twitter from "../assets/images/twitter.png";
import mirror from "../assets/images/mirror.png";
import telegram from "../assets/images/telegram.png";
import farcaster from "../assets/images/farcaster.png";
import linkedin from "../assets/images/linkedin.png";
import footerStyles from "../styles/footer.module.scss";

export default function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const navRef = useRef();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleTermsClick = () => {
    router.push("/terms-of-use"); // Programmatically navigate to the Terms of Use page
  };

  return (
    <div className={footerStyles.footerMain}>
      <div className={footerStyles.footerFlex1}>
        <div className={footerStyles.footerLogoMain}>
          <Link href="/">
            <Image
              src={logo}
              className={footerStyles.footerLogo}
              onClick={scrollToTop}
              alt="Logo"
            />
          </Link>
        </div>
        <footer ref={navRef} className={footerStyles.footerNavbar}>
          <Link href="/about-us" className={footerStyles.footerLink} onClick={scrollToTop}>
            <span>About Us</span>
          </Link>
          <Link href="/governance" className={footerStyles.footerLink} onClick={scrollToTop}>
            Governance
          </Link>
          <Link href="https://lamprosdao.notion.site/a2d67afc0ed84377918b536341374f0e?v=6e84b9a6c7b648bd86dc9b20a4804124" className={footerStyles.footerLink} onClick={scrollToTop}>
            Contributions
          </Link>
          {/* <Link href="/dao-roadmap" className={footerStyles.footerLink} onClick={scrollToTop}>
            DAO Roadmap
          </Link> */}
        </footer>
      </div>

      <div className={footerStyles.footerIconMain}>
        <Link href="https://x.com/lamprosdao" target="_blank">
          <Image src={twitter} className={footerStyles.footerIcon} alt="Twitter" />
        </Link>
        <Link href="https://discord.gg/5jxNq8bDt2" target="_blank">
          <Image src={discord} className={footerStyles.footerIcon} alt="Discord" />
        </Link>
        <Link href="https://t.me/+7I_N47MwS7VlMDJl" target="_blank">
          <Image src={telegram} className={footerStyles.footerIcon} alt="Telegram" />
        </Link>
        <Link href="https://mirror.xyz/0xF362eaCAf0a28651d6f6218e5fD0Faf360fa779F" target="_blank">
          <Image src={mirror} className={footerStyles.footerIcon} alt="Mirror" />
        </Link>
        <Link href="https://warpcast.com/lamproslabsdao" target="_blank">
          <Image src={farcaster} className={footerStyles.footerIcon} alt="Farcaster" />
        </Link>
        <Link href="https://www.linkedin.com/company/lamprosdao/" target="_blank">
          <Image src={linkedin} className={footerStyles.footerIcon} alt="LinkedIn" />
        </Link>
      </div>
      
      <p className={footerStyles.footerCopyright}>
  Copyright © {currentYear} Lumos Fintech Ltd | 
  <Link href="/terms-of-use"  target="_blank" style={{ cursor: "pointer", marginLeft: "5px", textDecoration:"none", color:"white" }}>
    Terms of Use
  </Link>
</p>
    </div>
  );
}
