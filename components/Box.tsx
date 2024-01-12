import {twMerge} from "tailwind-merge";
import React from "react";

interface BoxProps {
    children: React.ReactNode;
    className?: String;
}

const Box: React.FC<BoxProps> = ({
                                     children,
                                     className
                                 }) => {
    return (
        <div className={twMerge(`
            bg-neutral-900 
            rounded-lg 
            h-fit 
            w-full
            `,
                className
            )}
        >
            {children}
        </div>
    );
}

export default Box;