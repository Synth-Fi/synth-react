// import logo from './logo.svg';
import React from "react";
import HeroSection from "../sections/HeroSection";
import HeroSection2 from "../sections/HeroSection2";
// import OutlinedBox from "./components/OutlinedBox";
import StackSection from '../sections/StackSection';
import TeamSection from '../sections/TeamSection';
// import { CryptoCards, Button } from 'web3uikit';
import { home_page_text } from "../home_page_text";
import GifCardSection from '../sections/GifCardSection';

function Home() {
  // HOME PAGE
  return (
    <div className="items-center">
      <HeroSection {...home_page_text.hero_section1} />

      {/* STACK SECTION */}
      <div className="flex flex-row justify-center items-center ">
        <StackSection {...home_page_text.stack_section} />
      </div>
      {/* Hero section 2 */}
      <div className="flex flex-row justify-center items-center ">
        <HeroSection2 {...home_page_text.hero_section2} />
      </div>
      <GifCardSection {...home_page_text} />
        <TeamSection team={home_page_text.team} />
    </div>
  );
}

export default Home;
