import React from "react";
import GovernanceSection from "../components/governance/GovernanceSection";

function governanceSection() {
  return (
    <div>
      <GovernanceSection />
    </div>
  );
}

export default governanceSection;

export const metadata = {
  title: "Governance",
  openGraph: {
    title: "Governance",
    url: "https://lampros-labs-nextjs-new.vercel.app/",
    siteName: "LamprosDAO",
    locale: "en_US",
    type: "website",
  },
};