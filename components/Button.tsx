"use client"
import React from 'react'

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
}

export const Button = ({ children, className, type, onClick, onMouseEnter, onMouseLeave, disabled }: ButtonProps) => {
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
            className={`${className} px-4 overflow-hidden py-1.5 cursor-pointer text-border relative ripple transition-colors hover:opacity-85 duration-150 ease-in `}>
            <span className="relative z-10">{children}</span>
        </button>
    )
}