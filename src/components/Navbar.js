import React from 'react';
import '../index.css';
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
        <div className="p-2 bg-dark" >
        <div className="text-yellow text-3xl">
            dddddddddddd
            {nav_items.map(item => (
                <div className="">
                    <a href={item.path}>{item.name}</a>
                </div>
            ))}
        </div>
        </div>
    );
}
