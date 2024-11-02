"use client";

import React from "react";
import { links } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
    const currPath = usePathname();

    return (
        <nav>
            <ul className="flex gap-8">
                {links.map((link, idx) => {
                    const { path, name } = link;

                    return (
                        <li key={idx}>
                            <Link
                                href={path}
                                className={`${
                                    path === currPath
                                        ? "text-orange border-b-2 border-orange"
                                        : "text-white"
                                } hover:text-orange font-medium capitalize transition-all`}
                            >
                                {name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default NavLinks;
