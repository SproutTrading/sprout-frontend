import React from 'react';

interface LeafDecorationProps {
    position: 'left' | 'right';
}

const LeafDecoration: React.FC<LeafDecorationProps> = ({ position }) => {
    return (
        <div
            className={`
        absolute top-0 z-10 hidden lg:block 
        bg-contain bg-no-repeat w-96 h-96
        ${position === 'left'
                    ? 'left-0 bg-[url("/images/leaves-left.png")] bg-left object-left-top'
                    : 'right-0 bg-[url("/images/leaves-right.png")] bg-right object-right-top'
                }
      `}
        />
    );
};

export default LeafDecoration; 