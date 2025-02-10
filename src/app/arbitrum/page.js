"use client";
import React from "react";
import "../styles/arbitrum.css";
import { ExternalLink } from "lucide-react";
import aboutImg from "../../../public/governance/171.svg";
import Image from "next/image";
import aboutStyle from "../styles/aboutUs.module.scss";

const Arbitrum = () => {
  return (
    <div className="arbitrumMainBg">
      <div className={aboutStyle.aboutImgMainDiv}>
        <Image src={aboutImg} alt="" className={aboutStyle.aboutImg} />
      </div>
      <div className="arbitrum-container">
        <div className="content-wrapper">
          <div className="arbMain">
            <div className="arbContainer">
              <Image
                src="governance/arbitrum.svg"
                alt=""
                width={30}
                height={30}
                className="arbitrumImg"
              />
              <h1 className="textArb mainheading">Arbitrum</h1>
              <Image
                src="governance/arbitrum.svg"
                alt=""
                width={30}
                height={30}
                className="arbitrumImg"
              />
            </div>

            <div>
              <h1 className="main-heading">
                Strengthening Arbitrum Governance & Research
              </h1>

              <p className="info">
                Lampros DAO is committed to enhancing governance, transparency,
                and community engagement within the Arbitrum ecosystem. Through
                in-depth research, interactive dashboards, and educational
                initiatives, we aim to empower delegates, developers, and users
                to make informed decisions. Our contributions focus on
                strengthening governance frameworks, improving incentive
                structures, and fostering participation in decentralized
                decision-making.
              </p>
            </div>
          </div>

          <p className="pointer-text">
            👉 Below are some of our key contributions to Arbitrum DAO
          </p>

          <div className="contributions-grid">
            <div className="contribution-card">
              <div className="card-number">1️⃣</div>
              <h3>LTIPP Research Bounty Reports</h3>
              <p>
                We conducted an in-depth analysis of the LTIPP incentive
                programs, evaluating their impact on participating and
                non-recipient protocols. Our research includes statistical
                models, interactive dashboards, and an ARB distribution tracker
                to ensure transparency.
              </p>
              <a
                href="https://forum.arbitrum.foundation/t/team-lampros-labs-dao-ltipp-research-bounty-reports/27015/3?u=euphoria"
                className="action-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the Reports
                <ExternalLink className="link-icon" />
              </a>
            </div>

            <div className="contribution-card">
              <div className="card-number">2️⃣</div>
              <h3>Arbitrum Governance & Development Initiative</h3>
              <p>
                Educated 1,200+ students across 18 colleges in Gujarat, India,
                on Arbitrum governance and smart contract development. Hands-on
                training led to 500+ smart contract deployments and increased
                community participation in Arbitrum governance.
              </p>
              <a
                href="https://forum.arbitrum.foundation/t/arbitrum-governance-and-development-initiative-lampros-labs-dao/26315?u=euphoria"
                className="action-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More
                <ExternalLink className="link-icon" />
              </a>
            </div>

            <div className="contribution-card">
              <div className="card-number">3️⃣</div>
              <h3>LTIPP Voting Dashboard</h3>
              <p>
                An interactive dashboard providing real-time voting insights for
                the LTIPP program, ensuring transparency for delegates, users,
                and community members. It offers project details, voting
                metrics, budget tracking, and proposal analysis.
              </p>
              <a
                href="https://docs.google.com/spreadsheets/d/1gBzO34v_YRQnR9ABTXjtTHMbqDylDGa54DT7LPekuqI/edit#gid=0"
                className="action-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Dashboard
                <ExternalLink className="link-icon" />
              </a>
            </div>

            <div className="contribution-card">
              <div className="card-number">4️⃣</div>
              <h3>STIP-B Voting Dashboard</h3>
              <p>
                A voting dashboard for STIP-B proposals, displaying key metrics
                like total funding requested, passed projects, and remaining
                voting time. It enhances decision-making transparency in
                Arbitrum DAO.
              </p>
              <a
                href="https://docs.google.com/spreadsheets/d/1PHcZfG39OgshYXZKq6GKSafEjWxFypxFrepZ7PU2zHM/edit?usp=sharing"
                className="action-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Dashboard
                <ExternalLink className="link-icon" />
              </a>
            </div>
          </div>

          <div className="see-more-container">
            <a
              href="https://lamprosdao.notion.site/a2d67afc0ed84377918b536341374f0e?v=6e84b9a6c7b648bd86dc9b20a4804124"
              className="see-more-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              See More
              <ExternalLink className="link-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arbitrum;
