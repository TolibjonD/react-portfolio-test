"use client"
import React from 'react'

type IconButtonProps = {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export const IconButton = ({ children, className, type, onClick, onMouseEnter, onMouseLeave, disabled }: IconButtonProps) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (onClick) {
            onClick(e);
        }
        const button = e.currentTarget;
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const span = document.createElement("span");
        span.className = "ripple";
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        button.appendChild(span);

        setTimeout(() => {
            span.remove();
        }, 600);
    };

    return (
        <button
            onClick={handleClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            disabled={disabled}
            type={type || 'button'}
            className={`w-8 h-8 flex items-center justify-center border border-line overflow-hidden rounded-full cursor-pointer text-rose-400 relative ripple transition-colors hover:bg-rose-600/90 hover:text-white duration-150 ease-in shadow-md focus:outline-none focus:ring-2 focus:ring-rose-400 ${className}`}>
            <span className="relative z-10">{children}</span>
        </button>
    )
}