import React from 'react';

import StackedButton from '../components/StackedButton';
export default function HeroSection(props) {
    return (
            <div className="bg-hero-img bg-auto p-2">
            <div className="text-left text-6xl p-4 m-5  max-w-5xl text-white font-press-start">
                    {props.main}
            <StackedButton text={props.button_text} onClick=''/>
                </div>
        </div>
    );
}