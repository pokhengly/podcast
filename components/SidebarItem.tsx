import React from "react";
import {IconType} from "react-icons";
import Link from "next/link";
import {twMerge} from "tailwind-merge";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
    color: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
                                                     icon: Icon,
                                                     label,
                                                     active,
                                                     href,
                                                     color
                                                 }) => {
    return (
        <Link
            href={href}
            className={twMerge(`
                flex
                flex-row
                h-auto
                items-center
                w-full
                gap-x-4
                text-base
                font-medium
                cursor-pointer
                hover:text-white
                transition
                text-neutral-400
                py-1
                `,
                active && "text-black"
            )}
        >
            <Icon size={26} color={color}/> {/* Ensure color prop is being passed here */}
            <p className={"truncate w-full text-black"}>{label}</p>
        </Link>
    );
};
export default SidebarItem;