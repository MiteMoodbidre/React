import React, { useState } from 'react';

const Back = () => {
    const [color, setColor] = useState('pink');

    return (
        <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
            <div className='fixed flex-wrap flex justify-center bottom-12  inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
                    <button
                        className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-violet-600'
                        onClick={() => setColor('green')}>
                        Test
                    </button>
                    <button
                        className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-violet-600'
                        onClick={() => setColor('orange')}>
                        Test
                    </button>
                    <button
                        className='outline-none px-4 py-1 rounded-full text-white shadow-lg text-violet-600'
                        onClick={() => setColor('blue')}>
                        Test
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Back;
