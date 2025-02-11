import { Josefin_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./styles/navbar.css";
import "bootstrap/dist/css/bootstrap.css";
import BootstrapClient from "@/app/components/BootstrapClient";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./styles/dao.css";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "LamprosDAO",
  description:
    "Driving Mainstream Adoption, Empowering Developers,and Cultivating the Future of Web3",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GXNK541QPQ"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GXNK541QPQ');
          `}
        </Script>
      </head>
      <body className={josefin.className}>
        <div className="layout-navbar">
          <Navbar />
        </div>
        <div className="layout-children">{children}</div>
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
