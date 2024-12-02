import homeStyle from "./styles/home.module.scss";
import HomeSection from "./components/home/homeSection";

export default function Home() {
  return (
    <div>
      <div className={homeStyle.lmplabHomepageMainBg}>
        <HomeSection />
      </div>
    </div>
  );
}
export const metadata = {
  title: "Lampros DAO",
  // description: "Home Page Description...",
  openGraph: {
    title: "Governance",
    // description: "Home Page Description...",
    url: "https://lampros-labs-nextjs-new.vercel.app/",
    siteName: "LamprosDAO",
    // images: [
    //   {
    //     url: "https://app.optimism.io/og-image.png", // Must be an absolute URL
    //     width: 800,
    //     height: 600,
    //   },
    //   {
    //     url: "https://app.optimism.io/og-image.png", // Must be an absolute URL
    //     width: 1800,
    //     height: 1600,
    //     alt: "My custom alt",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
};
