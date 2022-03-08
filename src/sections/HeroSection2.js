import React from 'react';
import img1 from '../assets/images/mockup.png';

// import '../index.css';
export default function HeroSection2(props) {
	return (
		<>
			<div className="font-Poppins w-full justify-center items-center bg-hero2-img bg-cover p-4 bg-center lg:max-w-7xl  md:max-w-4xl">
				<div className=" text-center text-xl items-center font-extrabold text-white pt-4 pb-4 md:text-3xl lg:text-4xl">
					<span>Reimagine Yield Farming</span>
				</div>
				<div className="grid grid-cols-3 gap-4 pr-6">
					<div className="col-span-2">
						<img className="max-w-full h-auto" src={img1} alt="sup" />
					</div>

					<div className="flex flex-col items-center justify-center opacity-90  ">
						<div className="flex flex-col items-center justify-center bg-gray rounded-xl h-1/2 text-center">
							<span className="font-Poppins p-3 text-white font-bold text-xl ">
								Simply deposit, and begin earning between
							</span>
							<span className="font-Poppins p-3 font-black text-4xl text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-[#7928ca]  to-[#ff0080]">
								5-15% APR
							</span>
							<button className="w-2/3 pr-6 pl-6 pt-4 pb-4 rounded-4xl bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080] text-2xl text-white">
								Launch App
							</button>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-3  bg-slate-600 relative ">
					<div className="absolute w-64 bg-purple text-2xl text-white rounded-xl">
						sdf
					</div>
					<div className="absolute w-64 w-3/4 bg-blue text-2xl text-white rounded-xl">
						sdf
					</div>
					<div className="absolute w-64 w-3/4 bg-yellow text-2xl text-white rounded-xl">
						sdf
					</div>
				</div>
			</div>
		</>
	);
}

//<h1 class="text-2xl font-bold text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-fuchsia-400  to-fuchsia-800"> Tailwind CSS Gradient Generator </h1>
//bg-mockup-img bg-cover bg-center h-[701px] w-4/5
// <div className="bg-hero2-img bg-cover p-4 bg-center items-center">
// 	<div className="grid grid-cols-2 p-4 content-center ">
// 		<div className="bg-mockup-img bg-cover bg-center">hhh</div>
// 		<div className=" text-4xl text-center p-4 m-2  max-w-5xl text-white">
// 			With Support For
// 			<div>
// 				<img
// 					className=" object-none object-center"
// 					src="logo-imgs.png"
// 				></img>
// 			</div>
// 		</div>
// 	</div>
// </div>
