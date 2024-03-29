"use client"

import React, {useMemo} from 'react';
import {usePathname} from "next/navigation";
import {HiHome} from "react-icons/hi";
import {BiSearch} from "react-icons/bi";
import Box from "@/components/Box";
import SidebarItem from "@/components/SidebarItem";
import Library from "@/components/Library";
import {twMerge} from "tailwind-merge";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
                                             children
                                         }) => {
    const pathName = usePathname();

const routes = useMemo(() => [
    {
        icon: HiHome,
        label: 'Home',
        active: pathName !== '/search',
        href: '/',
        color: '#1D4ED8', // Set the color to blue-700 here
    },
    {
        icon: BiSearch,
        label: 'Search',
        active: pathName === '/search',
        href: '/search',
        color: '#1D4ED8', // And this line
    },
], [pathName]);

    return (
        <div
            className={twMerge(`
                flex
                h-full
                
            `)}
        >
            <div
                className="
                    hidden
                    md:flex
                    flex-col
                    gap-y-2
                    bg-gray-200
                    h-full
                    w-[300px]
                    p-2
                "
            >
                <Box>
                    <div
                        className="
                            flex
                            flex-col
                            gap-y-4
                            px-5
                            py-4
                        "
                    >
                        {
                            routes.map((item) => (
                                <SidebarItem
                                    key={item.label}
                                    {...item}
                                />
                            ))
                        }

                    </div>
                </Box>
                <Box className={"overflow-y-auto h-full"}>
                    <Library/>
                </Box>

            </div>
            <main
                className="
                    h-full
                    flex-1
                    overflow-y-auto
                    py-2
                    pr-2
                "
            >
                {children}
            </main>
        </div>
    );
};

export default Sidebar;
