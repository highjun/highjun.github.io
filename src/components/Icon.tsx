import Image from 'next/image';
import React from 'react';

const Icon: React.FC<{
    name: string;
    size?: number;
}> = ({ name, size = 24 }) => {
    return (
        <Image
            src={`/icons/${name}.svg`}
            alt={name}
            width={size}
            height={size}
            className="inline-block"
        />
    );
};

export default Icon; 