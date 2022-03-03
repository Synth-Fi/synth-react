// import logo from './logo.svg';
import React from 'react';
import HeroSection from './components/HeroSection';
import HeroSection2 from './components/HeroSection2';
import OutlinedBox from './components/OutlinedBox';
import StackSection from './components/StackSection';
// import { CryptoCards, Button } from 'web3uikit';
import { home_page_text } from './home_page_text';

function App() {
  // HOME PAGE
  return (
    <div className='items-center'>

      <HeroSection />
      <div className=''>
      <p className='text-white text-center text-4xl p-5'>CDs are out VHS 
        is in 😎</p>
        </div>
      {/* STACK SECTION */}
      {home_page_text.outlined_boxes.map(box => {return (
        <OutlinedBox {...box}/>
        );})}
        <StackSection  {...home_page_text.stack_section}/>
        <HeroSection2 />
    </div>
  );
}

export default App;
