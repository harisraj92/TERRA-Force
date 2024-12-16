"use client";

import { usePathname } from "next/navigation";
import Header from "./components/header";
import Footer from "./components/footer";
import "./css/globals.css";
import AOSWrapper from "./components/AOSWrapper";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Function to determine the background image based on the route
  const getBackgroundImage = () => {
    switch (pathname) {
      case "/about":
        return "./images/verifylandpatta.jpg";
      case "/services":
        return "/images/landservices.jpg";
      case "/features":
        return "/images/surveylanddrone.jpeg";
      case "/pricing":
        return "/images/pricing.jpg";
      case "/testimonials":
        return "/images/Testimonials.jpg";
      case "/faq":
        return "/images/faq.jpg";
      case "/contact":
        return "/images/contact1.jpg";
      default:
        return "./images/drone.jpg"; // Default to home background
    }
  };

  const backgroundImage = getBackgroundImage();

  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta name="description" content="Digital Hub for land Information" />
        <title>NILAM</title>
      </head>
      <body className="bg-gray-50">
        <Header backgroundImage={backgroundImage} />
        <main>
          <AOSWrapper>{children}</AOSWrapper>
        </main>
        <Footer />
      </body>
    </html>
  );
}
