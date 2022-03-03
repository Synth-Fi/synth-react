// import logo from './logo.svg';
import React from 'react';
import HeroSection from './components/HeroSection';
import OutlinedBox from './components/OutlinedBox';
import StackSection from './components/StackSection';
// import { CryptoCards, Button } from 'web3uikit';
import { home_page_text } from './home_page_text';

function App() {
  // HOME PAGE
  return (
    <div>

      <HeroSection />
      <div className='grid grid-flow-row'>
      <p className='text-white text-center text-4xl'>CDs are out <p className=''>VHS </p>
        is in 😎</p>
        </div>
      {/* STACK SECTION */}
      {home_page_text.outlined_boxes.map(box => {return (
        <OutlinedBox {...box}/>
        );})}
        <StackSection  {...home_page_text.stack_section}/>
    </div>
  );
}

export default App;
