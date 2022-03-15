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
        <div className='px-4 ' key={props.i}>
            <div className="bg-yellow rounded-2xl nav-stack  hover:bg-opacity-70">
                <div className="bg-blue nav-stack  hover:bg-opacity-70">
                    <div className="bg-pink nav-stack text-center  hover:bg-opacity-70">
                        <p className="pt-1">{props.text}</p>

                    </div>
                </div>
            </div>
        </div>
    );
}





export default function Navbar() {
    return (
        <div className="flex flex-auto sticky top-0 z-50 items-center justify-between px-5" >
            {/* NAV BAR LOGO  */}
                <Logo />
            {/* NAV BAR ITEMS */}
            <div className="flex flex-row items-center justify-between">
                {nav_items.map((item,i) => (
                
                    <NavItem text={item.name} i={i} />
                ))}
            </div>
            {/* OPEN APP BUTTON */}
            <button className='bg-transparent my-2  hover:bg-pink text-pink font-semibold hover:text-purple py-2 px-4 border border-pink hover:border-transparent rounded-2xl'>
                Launch app</button>
        </div>
    );
}
