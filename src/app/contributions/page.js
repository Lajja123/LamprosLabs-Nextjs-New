"use client";
import { useState } from "react";
import Arbitrum from "../components/Arbitrum";
import Optimism from "../components/Optimism";
import Image from "next/image";
import "../styles/contributions.css";
import contribution from "@/app/assets/images/governance.png";

export default function ContributionsPage() {
  const [activeTab, setActiveTab] = useState("arbitrum");

  return (
    <div className="contributions-container">
        <div className="bgimage">
        <Image src={contribution} alt="ring" className="img"></Image>
      </div>
      <div className="content-wrapper-contribution">
        <h1 className="contriHeading">Contributions</h1>
        <p className="contributions-description">
          At Lampros DAO, we believe that impactful governance is built on
          transparency, research, and active participation. Our contributions
          span multiple ecosystems, where we conduct in-depth research, develop
          analytical tools, and support community education initiatives. Through
          our work, we aim to enhance decentralized decision-making, improve
          governance frameworks, and ensure greater accessibility to Web3
          ecosystems.
        </p>

        <div className="tab-container">
          <button
            className={`tab-button ${activeTab === "arbitrum" ? "active" : ""}`}
            onClick={() => setActiveTab("arbitrum")}
          >
            <Image
              src="/governance/arbitrum.svg"
              alt="arbitrum logo"
              width={40}
              height={40}
            />
            <span className="btnText">Arbitrum</span>
          </button>
          <button
            className={`tab-button ${activeTab === "optimism" ? "active" : ""}`}
            onClick={() => setActiveTab("optimism")}
          >
            <Image
              src="/governance/optimism.svg"
              alt="optimism logo"
              width={40}
              height={40}
            />
            <span className="btnText">Optimism</span>
          </button>
        </div>
      </div>

      <div className="content-container">
        {activeTab === "arbitrum" ? <Arbitrum /> : <Optimism />}
      </div>
    </div>
  );
}
