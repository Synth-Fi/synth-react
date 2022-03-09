// import React from 'react';
// import HeroSection from './../sections/HeroSection';
// import HeroSection2 from '../sections/HeroSection2';
// import OutlinedBox from '../components/OutlinedBox';
// import StackSection from '../sections/StackSection';
// import { home_page_text } from '../home_page_text';
// import GifCardSection from '../sections/GifCardSection';


// export default function Home(props){
//     return(
//         <div className='items-center'>

//         <HeroSection />
//         <div className=''>
//         <p className='text-white text-center text-4xl p-5'>CDs are out VHS 
//           is in 😎</p>
//           </div>
//         {/* STACK SECTION */}
//         {home_page_text.outlined_boxes.map(box => {return (
//           <OutlinedBox {...box}/>
//           );})}
//           <StackSection  {...home_page_text.stack_section}/>
//           <HeroSection2 />
//           <GifCardSection outlined_boxes={home_page_text.outlined_boxes}/>
//       </div>
//     );
// }