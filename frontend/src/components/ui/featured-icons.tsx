import type { FC, ReactNode, Ref } from "react";
import { isValidElement } from "react";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({
    theme: {
        text: ["display-xs", "display-sm", "display-md", "display-lg", "display-xl", "display-2xl"],
    },
});

export const cx = twMerge;

export function sortCx<T extends Record<string, string | number | Record<string, string | number | Record<string, string | number>>>>(classes: T): T {
    return classes;
}

import type React from "react";

type ReactComponent = React.FC<any> | React.ComponentClass<any, any>;

export const isFunctionComponent = (component: any): component is React.FC<any> => {
    return typeof component === "function";
};

export const isClassComponent = (component: any): component is React.ComponentClass<any, any> => {
    return typeof component === "function" && component.prototype && (!!component.prototype.isReactComponent || !!component.prototype.render);
};

export const isForwardRefComponent = (component: any): component is React.ForwardRefExoticComponent<any> => {
    return typeof component === "object" && component !== null && component.$$typeof.toString() === "Symbol(react.forward_ref)";
};

export const isReactComponent = (component: any): component is ReactComponent => {
    return isFunctionComponent(component) || isForwardRefComponent(component) || isClassComponent(component);
};

const iconsSizes = {
    sm: "*:data-icon:size-4",
    md: "*:data-icon:size-5",
    lg: "*:data-icon:size-6",
    xl: "*:data-icon:size-7",
};

const styles = sortCx({
    light: {
        base: "rounded-full",
        sizes: { sm: "size-8", md: "size-10", lg: "size-12", xl: "size-14" },
        colors: {
            brand: "bg-purple-500/20 text-purple-400",
            gray: "bg-gray-500/20 text-gray-400",
            error: "bg-red-500/20 text-red-400",
            warning: "bg-yellow-500/20 text-yellow-400",
            success: "bg-green-500/20 text-green-400",
        },
    },
    dark: {
        base: "text-white shadow-lg before:absolute before:inset-px before:border before:border-white/10",
        sizes: { sm: "size-8 rounded-md", md: "size-10 rounded-lg", lg: "size-12 rounded-xl", xl: "size-14 rounded-2xl" },
        colors: {
            brand: "bg-purple-600",
            gray: "bg-gray-600",
            error: "bg-red-600",
            warning: "bg-yellow-600",
            success: "bg-green-600",
        },
    }
});

interface FeaturedIconProps {
    ref?: Ref<HTMLDivElement>;
    children?: ReactNode;
    className?: string;
    icon?: FC<{ className?: string }> | ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    color?: "brand" | "gray" | "success" | "warning" | "error";
    theme?: "light" | "dark";
}

export const FeaturedIcon = (props: FeaturedIconProps) => {
    const { size = "sm", theme: variant = "light", color = "brand", icon: Icon, ...otherProps } = props;

    return (
        <div
            {...otherProps}
            data-featured-icon
            className={cx(
                "relative flex shrink-0 items-center justify-center",
                iconsSizes[size],
                styles[variant as keyof typeof styles].base,
                styles[variant as keyof typeof styles].sizes[size],
                styles[variant as keyof typeof styles].colors[color],
                props.className,
            )}
        >
            {isReactComponent(Icon) && <Icon data-icon className="z-1 w-1/2 h-1/2" />}
            {isValidElement(Icon) && <div className="z-1">{Icon}</div>}
            {props.children}
        </div>
    );
};