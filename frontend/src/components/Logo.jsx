
import React from 'react';

const Logo = ({ className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className={className}
            fill="currentColor"
            width="40"
            height="40"
        >
            {/* Building/House Icon */}
            <path d="M50 10 L10 45 L20 45 L20 90 L40 90 L40 65 L60 65 L60 90 L80 90 L80 45 L90 45 Z" fill="white" />
            {/* Roof accent or construction detail */}
            <path d="M50 20 L25 42 L25 45 L75 45 L75 42 Z" fill="#FF5100" opacity="0.3" />
        </svg>
    );
};

export default Logo;
