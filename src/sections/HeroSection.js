// import '

import React from 'react';

import StackedButton from '../components/StackedButton';
// import '../index.css';
export default function HeroSection(props) {
    return (
            <div className="bg-hero-img bg-auto p-2">
            <div className="text-left text-6xl p-4 m-2  max-w-5xl text-white font-press-start">
                    Your gateway to simple compound interest on your Defi Assets
            <StackedButton text="Join waitlist" onClick=''/>
                </div>
        </div>
    );
}