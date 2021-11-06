import React from 'react';

const Position = ({children, x=0, y=0}) => {
    return (
        <div className="Position"
             style={{
                 position: 'absolute',
                 left: x,
                 top: y,
             }}>

            {children}

        </div>
    )
};

export default Position;