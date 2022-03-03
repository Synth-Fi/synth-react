import React from 'react';
import Logo from './Logo';
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

function NavItem(props) {
    return (
        <div className='px-4'>
            <div className="bg-yellow rounded-2xl nav-stack">
                <div className="bg-blue nav-stack">
                    <div className="bg-pink nav-stack text-center">
                        <p className="pt-1">{props.text}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}





export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-4" >
            {/* NAV BAR LOGO  */}
                <Logo />
            {/* NAV BAR ITEMS */}
            <div className="flex flex-row p-3">
                {nav_items.map(item => (
                
                    <NavItem text={item.name} />
                ))}
            </div>
            {/* OPEN APP BUTTON */}
            <button className='bg-transparent hover:bg-pink text-pink font-semibold hover:text-purple py-2 px-4 border border-pink hover:border-transparent rounded-2xl'>
                Connect</button>
        </div>
    );
}
