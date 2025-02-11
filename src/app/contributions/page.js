"use client";
import { useState } from "react";
import Arbitrum from "../components/Arbitrum";
import Optimism from "../components/Optimism";
import Image from "next/image";
import "../styles/contributions.css";
import contribution from "../../../public/governance/174.svg";

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
        At Lampros DAO, we actively contribute to both governance and research, ensuring that decentralized ecosystems remain transparent, efficient, and community-driven. Through governance, we engage in DAO discussions, voting, and proposal-making, helping shape the direction of decentralized decision-making. Our research efforts focus on analyzing governance structures, incentive programs, and power distribution to provide data-backed insights that drive informed decisions.
        <br />
        <br />

        By working across multiple DAOs, we aim to improve governance participation, develop analytical tools, and contribute to ecosystem growth. Our work helps communities navigate decentralization, ensuring long-term sustainability and inclusivity.
        </p>
      </div>

      <div className="tab-container">
        <button
          className={`tab-button ${activeTab === "arbitrum" ? "active" : ""}`}
          onClick={() => setActiveTab("arbitrum")}
        >
          <Image
            src="/governance/arbitrum.svg"
            alt="arbitrum logo"
            width={30}
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
            width={30}
            height={40}
          />
          <span className="btnText">Optimism</span>
        </button>
      </div>

      <div className="content-container">
        {activeTab === "arbitrum" ? <Arbitrum /> : <Optimism />}
      </div>
    </div>
  );
}
