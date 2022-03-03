import React from 'react';

export default function OutlinedBox(props) {
    return (

        <div className={`bg-transparent border-8 border-${props.color} rounded-3xl p-4 m-4 max-w-lg`}>
            <div className=''>
                <div className='flex flex-row justify-between text-left p-3 '>
                    <div className={`text-left text-${props.color} text-2xl`}>
                        {props.main}
                    </div>
                    <p className='text-5xl'>
                        {props.emoji}
                    </p>
                </div>
                <div className='text-md max-w-sm p-3 pt-0'>
                    {props.secondary}
                </div>
            </div>
        </div>
    );
}