import React from 'react';
import Image from 'next/image';
import { Box } from '@mui/material';

type imageProps = {
    src: string;
    alt: string;
    strokeColor?: string,
    strokeWidth?: number
}

const FramedImage = ({ src, alt, strokeColor = "#f57344", strokeWidth = 5 }: imageProps) => {
    return (
        <Box sx={{ position: 'relative', width: '513px', height: '513px' }}>
            {/* SVG Shape Clip Path */}
            <svg width="0" height="0">
                <defs>
                    <clipPath id="clip-shape">
                        <path d="M143.385 479.93L143.385 479.929C86.1603 457.468 37.9742 403.063 14.9662 333.777C-7.95257 264.576 -5.57458 180.566 36.1367 115.425C77.9457 50.1815 159.226 3.66055 244.33 0.656615C329.356 -2.3478 418.26 38.0833 460.778 103.39C503.292 168.78 499.498 259.152 470.485 326.715C441.489 394.148 387.218 438.755 326.908 465.895C266.679 492.947 200.512 502.389 143.385 479.93Z" />
                    </clipPath>
                </defs>
            </svg>

            {/* Background for border effect */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 493 493"
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
            >
                <path
                    d="M143.385 479.93L143.385 479.929C86.1603 457.468 37.9742 403.063 14.9662 333.777C-7.95257 264.576 -5.57458 180.566 36.1367 115.425C77.9457 50.1815 159.226 3.66055 244.33 0.656615C329.356 -2.3478 418.26 38.0833 460.778 103.39C503.292 168.78 499.498 259.152 470.485 326.715C441.489 394.148 387.218 438.755 326.908 465.895C266.679 492.947 200.512 502.389 143.385 479.93Z"
                    fill="none" // No fill for the stroke effect
                    stroke={strokeColor} // Use the strokeColor prop
                    strokeWidth={strokeWidth} // Use the strokeWidth prop
                />
            </svg>

            {/* Image inside the clip path */}
            <Image
                src={src}
                alt={alt}
                layout="fill"
                objectFit="cover"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    clipPath: 'url(#clip-shape)', // Apply the clip path
                    zIndex: 2, // Ensure the image is above the border
                }}
            />

            {/* SVG Icons at the bottom left */}
            <div style={{
                position: 'absolute',
                bottom: '20px',
                left: '20px',
                zIndex: 3 // Ensure the icons are above the image
            }}>
                <svg width="104" height="30" viewBox="0 0 104 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12.2021" width="5" height="30" transform="rotate(24 12.2021 0)" fill="#f77445fd" />
                    <rect x="33.9719" width="5" height="30" transform="rotate(24 33.9719 0)" fill="#f57344ec" />
                    <rect x="55.7418" width="5" height="30" transform="rotate(24 55.7418 0)" fill="#f57344d6" />
                    <rect x="77.5116" width="5" height="30" transform="rotate(24 77.5116 0)" fill="#f5734494" />
                    <rect x="99.2813" width="5" height="30" transform="rotate(24 99.2813 0)" fill="#f5734464" />
                </svg>
            </div>
        </Box>
    );
};

export default FramedImage;
