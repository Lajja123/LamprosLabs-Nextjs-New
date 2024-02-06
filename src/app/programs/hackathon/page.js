import HackathonSection from "@/app/components/hackathon/hackathonSection";

export default function hackathon() {
  return <HackathonSection />;
}
export const metadata = {
  title: "Hackathon Page",
  description: "Hackathon Page Description...",
  openGraph: {
    title: "Hackathon Page",
    description: "Hackathon Description",
    url: "https://lampros-labs-nextjs-new.vercel.app/programs/hackathon",
    siteName: "LamprosLabs",
    images: [
      {
        url: "https://uniswap.org/images/twitter-card.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://uniswap.org/images/twitter-card.jpg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
