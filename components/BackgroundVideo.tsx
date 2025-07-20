import React from 'react';

interface BackgroundVideoProps {
    src: string;
    overlayColor?: string;
    className?: string;
    children?: React.ReactNode;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src, overlayColor = 'bg-black/40', className = '', children }) => {
    return (
        <div className={`relative w-full h-full ${className}`}>
            <div className="absolute inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
                <video
                    className="w-full h-full object-cover"
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-hidden="true"
                />
                <div className={`absolute inset-0 ${overlayColor}`} />
            </div>
            <div className="relative z-10 w-full h-full flex flex-col">{children}</div>
        </div>
    );
};

export default BackgroundVideo; 