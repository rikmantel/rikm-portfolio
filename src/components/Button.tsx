import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md";
    icon?: ReactNode;
    iconPosition?: "right" | "left";
    href?: string;
    children: ReactNode;
}

export function Button({
    variant = "primary",
    size = "md",
    icon,
    iconPosition = "right",
    href,
    children,
    className,
    ...props
}: ButtonProps) {
    const defaultIcon = <ArrowRight size={16} />;
    const displayIcon = icon ?? defaultIcon;

    const baseClasses =
        "relative inline-flex items-center justify-center font-sans transition-all duration-200 group";

    const variantClasses = {
        primary: "bg-black text-white hover:bg-stone-900",
        secondary: "bg-stone-100 text-stone-900 hover:bg-stone-200",
        ghost: "bg-transparent text-stone-900 hover:bg-stone-100",
    };

    const sizeClasses = {
        sm: "px-4 min-h-[44px] min-w-[110px] text-sm rounded-2xl",
        md: "px-5 min-h-[54px] min-w-[130px] text-base rounded-2xl",
    };


    const buttonClasses = clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
    );

    const label = (
        <span className="transition-transform duration-200 group-hover:-translate-x-2">
            {children}
        </span>
    );

    const rightIcon = displayIcon && iconPosition === "right" && (
        <span
            className="
        pointer-events-none
        absolute right-4 inset-y-0
        flex items-center
        opacity-0 translate-x-1
        transition-all duration-200
        group-hover:opacity-100 group-hover:translate-x-0
      "
        >
            {displayIcon}
        </span>
    );

    const leftIcon = displayIcon && iconPosition === "left" && (
        <span
            className="
        pointer-events-none
        absolute left-4 inset-y-0
        flex items-center
        opacity-0 -translate-x-1
        transition-all duration-200
        group-hover:opacity-100 group-hover:translate-x-0
      "
        >
            {displayIcon}
        </span>
    );

    const content = (
        <>
            {leftIcon}
            {label}
            {rightIcon}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={buttonClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button className={buttonClasses} {...props}>
            {content}
        </button>
    );
}
