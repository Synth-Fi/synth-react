import React from 'react';
import Logo from './Logo';
import '../index.css';
// import { ReactComponent as Logo } from '../../public/synth-logo.svg';
const nav_items = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'features',
        path: '#features',
    },
    {
        name: 'FAQ',
        path: '#faq',
    }
];

export default function Navbar() {
    return (
        <div className="grid grid-cols-3" >
        {/* NAV BAR LOGO  */}
        <Logo/>
        {/* NAV BAR ITEMS */}
        <div className="flex flex-row p-3 justify-end">
            {nav_items.map(item => (
                <div className="box-content h-10 w-40 m-3 text-xl bg-nav-img object-contain content-center">
                    <a href={item.path}>{item.name}</a>
                </div>
            ))}
        </div>
        {/* OPEN APP BUTTON */}
        <button>Connect</button>
        </div>
    );
}
