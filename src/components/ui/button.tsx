import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors",
    {
        variants: {
            variant: {
                default: "bg-orange text-primary hover:bg-orange-hover",
                primary: "bg-primary text-white",
                outline:
                    "border border-orange bg-transparent text-orange hover:bg-orange hover:text-primary",
            },
            size: {
                default: "h-[44px] px-6 ",
                sm: "h-[48px] px-6",
                md: "h-[52px] px-7",
                lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
