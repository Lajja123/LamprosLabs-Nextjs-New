"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { MdExpandLess, MdOutlineExpandMore } from "react-icons/md";
import styles from "../../styles/vote.module.scss";
import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLine } from "react-icons/ri";

const VoteSection = () => {
  const [expandedItem, setExpandedItem] = useState(0);
  const [selectedProtocol, setSelectedProtocol] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  const protocols = [
    {
      name: "Arbitrum", // Changed to proper display name
      value: "arbitrum", // Added value for internal handling
      icon: "/governance/arbitrum.svg",
      link: "https://forum.arbitrum.foundation/t/lampros-dao-delegate-communication-thread/26642",
    },
    {
      name: "Optimism", // Changed to proper display name
      value: "optimism",
      icon: "/governance/optimism.svg",
      link: "",
    },
    {
      name: "Uniswap", // Changed to proper display name
      value: "uniswap",
      icon: "/governance/uniswap.svg",
      link: "",
    },
    {
      name: "ENS", // Changed to proper display name
      value: "ens",
      icon: "/governance/ens.svg",
      link: "",
    },
  ];

  // Function to parse forum URL and extract post ID and post number
  const parseForumUrl = (url) => {
    try {
      const urlWithoutQuery = url.split("?")[0];
      const matches = urlWithoutQuery.match(/\/(\d+)\/(\d+)$/);
      if (!matches) return null;

      return {
        postId: matches[1],
        postNumber: matches[2],
      };
    } catch (error) {
      console.error("Error parsing forum URL:", error);
      return null;
    }
  };

  const fetchForumPost = async (url) => {
    try {
      // Parse the forum URL to extract relevant details
      const parsed = parseForumUrl(url);
      if (!parsed) return null;

      const { postId, postNumber } = parsed;

      // Call the API route handler on your server
      const response = await fetch(
        `/api/fetch-forum-post?postId=${postId}&postNumber=${postNumber}`
      );
      const data = await response.json();

      // Return both cooked content and created_at
      return {
        content: data?.cooked || null,
        createdAt: data?.created_at || null,
      };
    } catch (error) {
      console.error("Error fetching forum post:", error);
      return null;
    }
  };

  const determineProtocol = (forumLink, commentlink) => {
    const link = forumLink.toLowerCase();
    // const comment = commentlink.toLowerCase();

    if (link.includes("arbitrum")) return "Arbitrum";
    if (link.includes("optimism")) return "Optimism";
    if (link.includes("uniswap")) return "Uniswap";
    if (link.includes("ens")) return "ENS";
    return "Arbitrum"; // default fallback
  };

  // Function to determine icon based on protocol
  const getProtocolIcon = (protocol) => {
    return `/governance/${protocol}.svg`;
  };

  const fetchProposals = useCallback(async () => {
    try {
      setLoading(true);
      // Find the protocol object from the protocols array
      const protocolObj = protocols.find((p) => p.name === selectedProtocol);
      // Use the value (lowercase) for API calls
      const queryString = protocolObj ? `?protocol=${protocolObj.value}` : "";
      const response = await fetch(`/api/notion-proposals${queryString}`);
      const data = await response.json();

      if (data.success && data.data) {
        const validProposals = data.data.filter(
          (proposal) =>
            proposal["Communication Rationale"] && proposal["Commented By"]
        );

        const transformedProposals = await Promise.allSettled(
          validProposals.slice(0, 5).map(async (proposal, index) => {
            // Get the display name for the protocol
            const protocol = determineProtocol(
              proposal["Forum Post Link"] || "",
              proposal["Communication Rationale"] || ""
            );

            // Rest of your transformation code...
            let date = new Date();
            if (proposal["Start Date"]) {
              const [day, month, year] = proposal["Start Date"].split("/");
              date = new Date(year, month - 1, day);
            }

            let forumContent = null;
            let forumCreatedAt = null;
            if (proposal["Communication Rationale"]) {
              try {
                const rawContent = await fetchForumPost(
                  proposal["Communication Rationale"]
                );
                forumContent = processForumContent(rawContent.content);
                forumCreatedAt = rawContent?.createdAt || null;
              } catch (error) {
                console.error("Failed to fetch forum content:", error);
              }
            }

            return {
              id: index + 1,
              protocol: protocol, // This will now be properly capitalized
              icon: getProtocolIcon(protocol.toLowerCase()),
              title: proposal["Proposal Name"] || "Untitled Proposal",
              tag: "Governance",
              result: proposal["Voted"],
              content: proposal["Comment Draft"] || "",
              commentLink: proposal["Communication Rationale"] || "",
              forumContent: forumContent,
              forumCreatedAt: forumCreatedAt,
              voter: {
                icon: "/governance/voter.svg",
                name: proposal["Commented By"] || "Anonymous",
                date: `On ${date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}`,
              },
              type: proposal["Type"],
            };
          })
        );

        const successfulProposals = transformedProposals
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);

        setProposals(successfulProposals);
      }
    } catch (error) {
      console.error("Failed to fetch proposals:", error);
    } finally {
      setLoading(false);
    }
  }, [selectedProtocol]);

  // Update useEffect to reset the expanded item when protocol changes
  useEffect(() => {
    setExpandedItem(null); // Reset expanded item when protocol changes
    fetchProposals();
  }, [fetchProposals, selectedProtocol]);

  // Content processing function
  const processForumContent = (content) => {
    const baseUrl = "https://forum.arbitrum.foundation";

    // Replace relative URLs with absolute URLs
    const updatedContent = content.replace(
      /href="\/(?!\/)/g, // Match hrefs that start with a single "/"
      `href="${baseUrl}/`
    );

    // Ensure all anchor tags open in a new tab with security attributes
    const updatedLinks = updatedContent.replace(
      /<a\b([^>]*?)>/g, // Match all anchor tags
      '<a target="_blank" rel="noopener noreferrer" $1>'
    );

    // Remove HTML tags for images
    const contentWithoutImages = updatedLinks.replace(/<img[^>]*>/g, "");

    // Process blockquotes with username
    const processedContent = contentWithoutImages.replace(
      /<aside[^>]*data-username="([^"]*)"[^>]*>.*?<blockquote>/gs,
      (match, username) => `<div class="${styles.quotedText}"><blockquote><span class="${styles.quoteUsername}">${username}:</span><br/>`
    );

    // Clean up closing tags
    const contentProcessed = processedContent.replace(
      /<\/blockquote><\/aside>/g,
      "</blockquote></div>"
    );

    // Extract mentioned usernames from the 'cooked' property
    const mentionedUsernames = extractMentionedUsernames(contentProcessed);

    // Apply custom CSS classes to the mentioned usernames
    const finalContent = updatedContent.replace(
      /@(\w+)/g,
      (match, username) => {
        if (mentionedUsernames.includes(username)) {
          return `<a class="${styles.mentionedUsernamesStyle}" href="https://forum.arbitrum.foundation/u/${username}" target="_blank" rel="noopener noreferrer">@${username}</a>`;
        } else {
          return match;
        }
      }
    );

    const processedContentFinal = finalContent.replace(
      /href="(https:\/\/forum.arbitrum.foundation\/[^"]+)"/g,
      (match, url) => {
        if (url.includes('/u/')) {
          // Links to user profiles
          return `href="${url}" class="${styles.mentionedUsernamesStyle}" target="_blank" rel="noopener noreferrer"`;
        } else {
          // Other links
          return `href="${url}" class="${styles.mentionedHyperlinkStyle}" target="_blank" rel="noopener noreferrer"`;
        }
      }
    );
  
    return processedContentFinal;
  };

  const extractMentionedUsernames = (content) => {
    // Use a regular expression or other parsing method to extract the mentioned usernames from the 'cooked' property
    const regex = /@(\w+)/g;
    const matches = content.match(regex);
    return matches ? matches.map((match) => match.slice(1)) : [];
  };

  const SkeletonLoader = () => {
    return (
      <div className={styles.skeletonList}>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className={styles.skeletonItem}></div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles.outerdiv}>
      {/* Our Delegations Section */}
      <div className={styles.delegationsSection}>
        <h2 className={styles.delegationsHeading}>Our Delegations</h2>
        <div className={styles.delegationsContainer}>
          {protocols.map((protocol, index) =>
            protocol.link ? (
              <a
                key={index}
                href={protocol.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.delegationCard}
              >
                <Image
                  src={protocol.icon}
                  alt={`${protocol.name} Icon`}
                  width={50}
                  height={50}
                />
                <p>{protocol.name}</p>
              </a>
            ) : (
              <div key={index} className={styles.delegationCard}>
                <Image
                  src={protocol.icon}
                  alt={`${protocol.name} Icon`}
                  width={50}
                  height={50}
                />
                <p>
                  {" "}
                  {protocol.name.charAt(0).toUpperCase() +
                    protocol.name.slice(1)}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      <div className={styles.upperpart}>
        <h1 className={styles.heading}>Recent Votes</h1>
        <div className={styles.filter}>
          {protocols.map((protocol) => (
            <button
              key={protocol.name}
              onClick={() =>
                setSelectedProtocol(
                  selectedProtocol === protocol.name ? null : protocol.name
                )
              }
              className={`${styles.protocolButton} ${
                selectedProtocol === protocol.name ? styles.active : ""
              }`}
            >
              <Image
                src={protocol.icon}
                alt={`${protocol.name} icon`}
                width={24}
                height={24}
              />
              <p>{protocol.name}</p>
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <SkeletonLoader /> // Render SkeletonLoader while loading is true
      ) : (
        proposals.map((proposal, index) => (
          <div key={proposal.id} className={styles.votelist}>
            <div
              className={styles.votes}
              onClick={() =>
                setExpandedItem(expandedItem === index ? null : index)
              }
            >
              <div className={styles.left}>
                <span className={styles.icon}>
                  <Image
                    src={proposal.icon}
                    alt={`Proposal ${proposal.id} icon`}
                    width={40}
                    height={40}
                  />
                </span>
                <div className={styles.content}>
                  <h3 className={styles.contentTitle}>{proposal.title}</h3>
                  <div className={styles.chainDiv}>
                    <span
                      className={`${styles.arbitrumTag} ${
                        styles[`${proposal.protocol.toLowerCase()}-tag`]
                      }`}
                    >
                      {proposal.protocol.charAt(0).toUpperCase() +
                        proposal.protocol.slice(1)}
                    </span>
                    <span
                      className={` ${styles.votingCommon} ${
                        proposal.type === "On-chain Voting"
                          ? styles.onchain
                          : styles.offchain
                      }`}
                    >
                      {proposal.type}
                    </span>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.result}>
                  <span className={styles.r1}>Voted</span>
                  <span
                    className={`${styles.r2} ${
                      proposal.result === "For"
                        ? styles.for
                        : proposal.result === "Against"
                        ? styles.against
                        : proposal.result === "Abstain"
                        ? styles.abstain
                        : styles.for
                    }`}
                  >
                    {proposal.result}
                  </span>
                </div>
                {expandedItem === index ? (
                  <MdExpandLess className={styles.arrowyellow} />
                ) : (
                  <MdOutlineExpandMore className={styles.arrowwhite} />
                )}
              </div>
            </div>

            {expandedItem === index && (
              <div className={styles.belowdiv}>
                {proposal.voter && (
                  <div className={styles.voter}>
                    <div className={styles.profile}>
                      <div className={styles.profileicon}>
                        <Image
                          src={proposal.voter.icon}
                          alt={`${proposal.voter.name} icon`}
                          width={32} // Adjust dimensions as needed
                          height={32}
                        />
                      </div>
                      <div className={styles.profilecontent}>
                        <div>{proposal.voter.name}</div>
                        <div className={styles.dateline}>
                          Voted{" "}
                          <span
                            className={`${styles.r2} ${
                              proposal.result === "For"
                                ? styles.for
                                : proposal.result === "Against"
                                ? styles.against
                                : proposal.result === "Abstain"
                                ? styles.abstain
                                : styles.for
                            }`}
                          >
                            {proposal.result}
                          </span>{" "}
                          on{" "}
                          {proposal.forumCreatedAt && (
                            <span className={styles.dateVote}>
                              {new Date(
                                proposal.forumCreatedAt
                              ).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className={styles.comment}>
                      <div className={styles.rationaleDiv}>
                        <span className={styles.rationale}>Rationale</span>
                      </div>
                      {proposal.forumContent ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: proposal.forumContent,
                          }}
                        />
                      ) : (
                        <p>{proposal.commentLink}</p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))
      )}

      <div className={styles.btnGovernanceDiv}>
        <a
          href="https://lamprosdao.notion.site/governance"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnGovernance}
        >
          See more
        </a>
      </div>

      <div className={styles.delegateNow}>
        <h1 className={styles.delegateNowHeading}>Delegate to Lampros DAO</h1>
        <div className={styles.delegateNowPara}>
          <div>Your delegation matters !! </div>
          <br />
          <div>
            By delegating your tokens to our team, you enable us to represent
            your interests and drive meaningful governance decisions. Empower
            effective governance in Web3.
          </div>
          <br />

          <div>
            Delegate your tokens to our team and become a part of shaping the
            future of decentralized ecosystems.
          </div>
        </div>
        <Link
          href="https://app.chora.club/arbitrum/0xa2d590fee197c0b614fe7c3e10303327f38c0dc3?active=info"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          <button className={styles.delegateNowButton}>
            Delegate <RiArrowRightUpLine className={styles.upErrow} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VoteSection;
