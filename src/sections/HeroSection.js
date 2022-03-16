import React from 'react';

import StackedButton from '../components/StackedButton';
export default function HeroSection(props) {
    return (
            <div className="bg-hero-img bg-cover bg-top bg-no-repeat p-2 min-h-screen bg-fixed">
            <div className="text-left text-6xl p-4 m-5 py-8 max-w-5xl text-white font-press-start">
                    {props.main}
            <StackedButton text={props.button_text} onClick=''/>
                </div>
        </div>
    );
}