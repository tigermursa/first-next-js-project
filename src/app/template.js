"use client";

import React, { Children } from 'react';

const Template = ({ children }) => {
    console.log('yo yo i am from client hehe');
    return (
        <div>
            <button className='btn bg-slate-500 p-4 mt-2'>wow</button>
            {children}
        </div>
    );
};

export default Template;