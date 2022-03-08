// import logo from './logo.svg';
import React from 'react';
import HeroSection from './sections/HeroSection';
import HeroSection2 from './sections/HeroSection2';
import OutlinedBox from './components/OutlinedBox';
import StackSection from './sections/StackSection';
import { home_page_text } from './home_page_text';
import GifCardSection from './sections/GifCardSection';

function App() {
  // HOME PAGE
  return (
    <div className='items-center'>

      <HeroSection  {...home_page_text.hero_section1}/>
      <div className=''>
      <p className='text-white text-center text-4xl p-5'>CDs are out VHS 
        is in 😎</p>
        </div>
      {/* STACK SECTION */}
      <StackSection  {...home_page_text.stack_section}/>
      {home_page_text.outlined_boxes.map(box => {return (
        <OutlinedBox {...box}/>
        );})}
        <HeroSection2 />
        <GifCardSection outlined_boxes={home_page_text.outlined_boxes}/>
    </div>
  );
}

export default App;
