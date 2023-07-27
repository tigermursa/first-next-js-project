import React from 'react';

const HelloWorld = ({params}) => {
    return (
        <div>
          <div>singleblog {year || new Date().getFullYear()} for {id}</div>;
        </div>
    );
};

export default HelloWorld;